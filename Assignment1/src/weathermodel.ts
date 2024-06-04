import sequelize from "./pgConfig";
import {DataTypes, Model} from 'sequelize';

interface WeatherAttributes{
     id ?: number;
     city: string;
     country: string;
     weather: string;
     time: Date
     latitude: number;
     longitude: number;
}

 class Weather  extends Model<WeatherAttributes> implements WeatherAttributes {
    id!: number;
    city!: string;
    country!: string;
    weather!: string;
    time!: Date;
    latitude!: number;
    longitude!: number;
}

Weather.init(
    {
        id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country:{
            type: DataTypes.STRING,
            allowNull: false
        },
        weather: {
            type: DataTypes.STRING,
            allowNull:false
        },
        time: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue:DataTypes.NOW
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull:false,
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'weather',
        timestamps: false
    },
);

export {Weather}