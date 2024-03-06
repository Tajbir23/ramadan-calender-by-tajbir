const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());


const corsOptions = {
    origin: '*',
    credentials: true
}


app.use('/api', routes);
app.get('/',(req,res)=>{
    res.send("server is running root directory there is no data")
})

app.get('/locations', cors(corsOptions) ,async(req,res)=>{
    const { lat, long} = req.query;
    const address = async() =>{
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json&accept-language=en`;
        const response = await fetch(url)
        const data = await response.json();
        return data
    }
    const getAddress = await address()

    console.log(getAddress)
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

app.get('/district', cors(corsOptions), async(req,res)=>{
    const { district } = req.query;
    const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${district}&country=bd&method=3`)
    const data = await response.json();
    res.send(data)
})


const connection = async() =>{
    await mongoose.connect("mongodb+srv://tajbir:y6mcEooEI4Is8FCb@cluster0.g1xrt1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
        console.log("connected to db")
    }).catch((err)=>{
        console.log(err)
    })
}


app.listen(port, async() => {
    await connection()
    console.log(`app listening at http://localhost:${port}`)
})

