const express = require('express');
const router = express.Router();
const AccountSchema = require('./model');

router.get('/account', async(req, res) => {
    const { name, email, uid } = req.query;

    try {
        const account = await AccountSchema.create({
            name,
            email,
            uid
        });

        res.send(account);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.get('/account/district', async(req, res) => {
    const { uid, district } = req.params;

    try {
        const account = await AccountSchema.findById(uid);

        if(account){
            const ramadanTime = async() =>{
                const url = `https://api.aladhan.com/v1/timingsByCity?city=${district}&country=bd&method=3`
                const response = await fetch(url)
                const data = await response.json();
                return data
            }
            const ramadanDataByTajbir = await ramadanTime()
            res.send(ramadanDataByTajbir)
        }else{
            res.send("unauthorize access")
        }
        
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;