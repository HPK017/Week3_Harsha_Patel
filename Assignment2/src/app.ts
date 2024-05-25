import express, {Request, Response} from 'express';
import { createWeather , getWeathers, getWeatherByCity} from './service';

const app = express();
const port= 8000;
app.use(express.json())


app.post('/weathers', async(req : Request, res : Response)=>{
    await createWeather(req.body);
    res.send("User Created successfully")
})

app.get('/api/weatherDashboard/:city?', async(req,res)=>{
    const city = req.params.city;

    if(city){
            const wData = await getWeatherByCity(city);
            res.json(wData);
    }else{
        const weathers = await getWeathers();
         res.json(weathers)
    }
})


app.listen(port, ()=>{
    console.log("Hi we are comforatable with node js");
})