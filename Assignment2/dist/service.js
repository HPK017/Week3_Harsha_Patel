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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherByCity = exports.getWeathers = exports.createWeather = void 0;
const weather_1 = require("./model/weather");
function createWeather(weather) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newWeather = yield weather_1.Weather.create(weather);
            if (newWeather) {
                return newWeather;
            }
        }
        catch (err) {
            throw err;
        }
    });
}
exports.createWeather = createWeather;
function getWeathers() {
    return __awaiter(this, void 0, void 0, function* () {
        const weathers = yield weather_1.Weather.findAll();
        return weathers;
    });
}
exports.getWeathers = getWeathers;
function getWeatherByCity(city) {
    return __awaiter(this, void 0, void 0, function* () {
        const w = yield weather_1.Weather.findAll({
            where: { city }
        });
        return w;
    });
}
exports.getWeatherByCity = getWeatherByCity;
//# sourceMappingURL=service.js.map