import { DataTypes, Model } from "sequelize";
import sequelize from '../pgconfig';

interface WeatherAttributes {
    id: number;
    city: string;
    country: string;
    date : Date;
    weather:string;
}

class Weather extends Model<WeatherAttributes> implements WeatherAttributes {
    id!: number;
    city!: string;
    country!: string;
    date!: Date;
    weather!: string;
    
}

Weather.init(
    {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        city : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date : {
            type: DataTypes.DATE,
            allowNull: false,
        },
        weather : {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName : "weathers",
        timestamps: false,
    }
)

export {Weather};