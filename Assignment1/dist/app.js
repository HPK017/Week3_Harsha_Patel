"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weathermodel_1 = require("./weathermodel");
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/api/SaveWeatherMapping', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cities = req.body;
    try {
        const savedWeatherData = yield Promise.all(cities.map((cityObj) => __awaiter(void 0, void 0, void 0, function* () {
            const { city, country } = cityObj;
            // Fetch geocoding data
            const geocodingResponse = yield axios_1.default.get(`https://api.api-ninjas.com/v1/geocoding`, {
                params: { city },
                headers: { 'X-Api-Key': 'iJSPTwHqWvH0MBE3Q+DA5w==vgyiTJVvCJ49v3I6' }
            });
            console.log(`Geocoding response for ${city}:`, geocodingResponse.data);
            const { longitude, latitude } = geocodingResponse.data[0];
            console.log(`Coordinates for ${cityObj.city}: ${longitude}, ${latitude}`);
            // Fetch weather data
            const weatherResponse = yield axios_1.default.get('https://weatherapi-com.p.rapidapi.com/current.json', {
                params: { q: `${latitude},${longitude}` },
                headers: {
                    'X-RapidAPI-Key': 'c29a25781bmsha2dede99724b6c8p15bba7jsn43758529fd55',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            });
            const weatherData = weatherResponse.data.current.condition.text;
            const time = new Date();
            // Save data to the database
            yield weathermodel_1.Weather.create({
                city,
                country,
                weather: weatherData,
                time,
                latitude,
                longitude
            });
            return {
                city,
                country,
                weather: weatherData,
                time,
                latitude,
                longitude
            };
        })));
        res.json(savedWeatherData);
    }
    catch (error) {
        console.error(error);
        res.json({ message: "Error saving weather data" });
    }
}));
app.listen(9000, () => {
    console.log("server running");
});
//# sourceMappingURL=app.js.map