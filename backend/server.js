import express from 'express'
import 'dotenv/config'
import UserRoute from './routes/UserRoute.js';
import './db/db.js'


const app=express();
app.use('/api/users',UserRoute)


const PORT=process.env.PORT;



app.listen(PORT,()=>{
 console.log(`server has start on {$PORT}`)
})