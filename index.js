const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json());
// 25.7982283 89.5450458
app.post('/locations', async (req, res) => {
    const { lat, long} = req.body;


    const address = async() =>{
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json&accept-language=en`;
        const response = await fetch(url)
        const data = await response.json();
        return data
    }
    const getAddress = await address()

    const district = getAddress.address.state_district.split(' ')[0].toLocaleLowerCase()
    

    const ramadanTime = async() =>{
        const url = `https://api.aladhan.com/v1/timingsByCity?city=${district}&country=bd&method=3`
        const response = await fetch(url)
        const data = await response.json();
        return data
    }
    const ramadanDataByTajbir = await ramadanTime()

        res.send({
            ramadanDataByTajbir
        })
    
})

app.get('/',(req,res)=>{
    res.send("server is running")
})



app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

