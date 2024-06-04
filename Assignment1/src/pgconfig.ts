
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    username: "postgres",
    host: "localhost",
    password:"root",
    database: "postgres",
    port: 5432,
    dialect: "postgres"
})

sequelize.authenticate()
    .then(()=>{
    console.log('database connection established successfully');
    }).catch((err)=>{
        console.error("unable to connect the database", err);
        
    })

sequelize.sync().then(()=>{
    console.log("Models synchronized with databse")
}).catch((err)=>{
    console.error('unable to  synchronize models with the database:', err);
});

export default sequelize;