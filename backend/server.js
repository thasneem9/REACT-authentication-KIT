import express from 'express'
import dotenv from 'dotenv'
import UserRoute from './routes/UserRoute.js';
import './db/db.js'
import cors from 'cors'

dotenv.config();
const app=express();
app.use(cors())


app.use(express.json())
app.use('/api/users',UserRoute)


const PORT=5000;



app.listen(PORT,()=>{
 console.log(`Server has started on ${PORT}`)
})