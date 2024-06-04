import express, {Request , Response} from 'express';
import {Weather} from './weathermodel'
import axios from 'axios'

const app = express();
app.use(express.json())

app.post('/api/SaveWeatherMapping', async(req: Request,res: Response)=>{
   const cities: {city: string, country: string}[] = req.body;
   const savedWeatherData = [];

   try{
    for(const cityObj of cities){
        const {city, country} = cityObj;
        const geocoding = await axios.get(`https://api.api-ninjas.com/v1/geocoding`,{
            params: { city },
            headers : {
                'X-Api-Key' : 'iJSPTwHqWvH0MBE3Q+DA5w==vgyiTJVvCJ49v3I6'
            }
        })

        console.log(`Geocoding response for ${city}:`, geocoding.data);

        const { longitude, latitude } = geocoding.data[0];

        console.log(`Coordinates for ${cityObj.city}: ${longitude}, ${latitude}`);

        const weatherReport = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
            params: {
                q: `${latitude},${longitude}`
            },
            headers: {
                'X-RapidAPI-Key': 'c29a25781bmsha2dede99724b6c8p15bba7jsn43758529fd55',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        });

        const wetherData = weatherReport.data.current.condition.text;
        const time = new Date();

        await Weather.create({
            city,
            country,
            weather: wetherData,
            time: time,
            latitude,
            longitude
        })

        savedWeatherData.push({
            city,
            country,
            weather: wetherData,
            time: time,
            latitude,
            longitude
        }
        )
    }
    res.json(savedWeatherData)
   }
   catch(error){
    console.log(error);
    res.send("Error saving weather data")
   }
})


app.listen(9000, ()=>{
    console.log("server running")
})