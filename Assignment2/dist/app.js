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
const service_1 = require("./service");
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
app.post('/weathers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, service_1.createWeather)(req.body);
    res.send("User Created successfully");
}));
app.get('/api/weatherDashboard/:city?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const city = req.params.city;
    if (city) {
        const wData = yield (0, service_1.getWeatherByCity)(city);
        res.json(wData);
    }
    else {
        const weathers = yield (0, service_1.getWeathers)();
        res.json(weathers);
    }
}));
app.listen(port, () => {
    console.log("Hi we are comforatable with node js");
});
//# sourceMappingURL=app.js.map