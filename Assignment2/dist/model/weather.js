"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weather = void 0;
const sequelize_1 = require("sequelize");
const pgconfig_1 = __importDefault(require("../pgconfig"));
class Weather extends sequelize_1.Model {
}
exports.Weather = Weather;
Weather.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    weather: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: pgconfig_1.default,
    tableName: "weathers",
    timestamps: false,
});
//# sourceMappingURL=weather.js.map