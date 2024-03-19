const express = require("express");
const router = express.Router();
const AccountSchema = require("./model");
const cors = require("cors");

const userCors = {
  origin: "*",
  credentials: true,
};

router.get("/account", cors(userCors), async (req, res) => {
  const { name, email, uuid } = req.query;
  // console.log(name, email, uuid);
  try {
    const account = await AccountSchema.create({
      name,
      email,
      uuid,
    });

    if (account) {
      res.send(account);
    } else {
      res.send("unauthorize access");
    }
    // res.send(account)
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/account/district", async (req, res) => {
  const { uid, district } = req.query;
  console.log(uid)
  try {
    const account = await AccountSchema.findOne({uuid: uid});

    if (account) {
      const ramadanTime = async () => {
        const url = `https://api.aladhan.com/v1/timingsByCity?city=${district}&country=bd&method=3`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
      };

      const ramadanFullMonth = async () => {
        const url = `https://api.aladhan.com/v1/calendarByCity?city=${district}&country=bd&date=today`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
      };
      const ramadanDataByTajbir = await ramadanTime();
      const ramadanFullMonthDataByTajbir = await ramadanFullMonth();
      res.send({ramadanDataByTajbir, ramadanFullMonthDataByTajbir});
    } else {
      res.send("unauthorize access");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
