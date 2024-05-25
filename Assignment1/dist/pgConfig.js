"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    username: "postgres",
    host: "localhost",
    password: "root",
    database: "postgres",
    port: 5432,
    dialect: "postgres"
});
sequelize.authenticate()
    .then(() => {
    console.log('database connection established successfully');
}).catch((err) => {
    console.error("unable to connect the database", err);
});
sequelize.sync().then(() => {
    console.log("Models synchronized with databse");
}).catch((err) => {
    console.error('unable to  synchronize models with the database:', err);
});
exports.default = sequelize;
//# sourceMappingURL=pgConfig.js.map