import { Weather } from './model/weather';

async function createWeather(weather : Weather): Promise<any>{
    try{
        const newWeather = await Weather.create(weather);
        if(newWeather){
            return newWeather;
        }
    }
    catch(err:any){
        throw err;
    }
}

async function getWeathers() : Promise<any[]>{
    const weathers = await Weather.findAll();
    return weathers;
}

async function getWeatherByCity(city: string) : Promise<any[]> {
    const w = await Weather.findAll({
        where: {city}
});
    return w;
}

export {createWeather, getWeathers, getWeatherByCity}