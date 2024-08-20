import { Sequelize } from "sequelize";
import configFile from '../config/config.json'  assert { type: "json" };
import 'dotenv/config'
const config=configFile[process.env.NODE_ENV||'development']

const sequelize=new Sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect:config.dialect
})

sequelize.authenticate()
.then(()=>console.log("connectione stablised sucesfuly"))
.catch(err=>console.error("Unable to connect to database"))