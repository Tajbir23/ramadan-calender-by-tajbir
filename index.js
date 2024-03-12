const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const port = 3001;

const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
};


app.use(routes);


app.get("/", (req, res) => {
  res.send("server is running root directory there is no data");
});

app.get("/locations", cors(corsOptions), async (req, res) => {
  const { lat, long } = req.query;
  const address = async () => {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json&accept-language=en`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const getAddress = await address();

  console.log(lat, long);
  const district = getAddress.address.state_district
    .split(" ")[0]
    .toLocaleLowerCase();

  const ramadanTime = async () => {
    const url = `https://api.aladhan.com/v1/timingsByCity?city=${district}&country=bd&method=3`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const tomorrow = async () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dateString = `${year}-${month}-${day}`;
    const url = `https://api.aladhan.com/v1/calendarByCity?city=${district}&country=bd&date=${dateString}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const data = await ramadanTime();
  const tomorrowData = await tomorrow();

  res.send({
    data,tomorrowData, district
  });
});

app.get("/district", cors(corsOptions), async (req, res) => {
  const { district } = req.query;
  const response = await fetch(
    `https://api.aladhan.com/v1/timingsByCity?city=${district}&country=bd&method=3`
  );
  const item = await response.json();
  const data = await item;

  const tomorrow = async () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dateString = `${year}-${month}-${day}`;
    const url = `https://api.aladhan.com/v1/calendarByCity?city=${district}&country=bd&date=${dateString}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const tomorrowData = await tomorrow();
  console.log(district); 
  res.send({data,tomorrowData});
});



const connection = async () => {
  await mongoose
    .connect(
      "mongodb+srv://tajbir:y6mcEooEI4Is8FCb@cluster0.g1xrt1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
};

app.listen(port, async () => {
  await connection();
  console.log(`app listening at http://localhost:${port}`);
});
