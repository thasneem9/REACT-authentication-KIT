import express from 'express'
import dotenv from 'dotenv'
import UserRoute from './routes/UserRoute.js';
import sequelize from './db/database.js';
import cors from 'cors'


dotenv.config();
const app=express();
app.use(cors())
const PORT=5000;


app.use(express.json())
app.use('/api/users',UserRoute)



// Sync models and start server
sequelize.sync({ force: false }) // means dont create tables unles necary
.then(() => {
    console.log('Database synced successfully');
})
.catch((err) => {
    console.log('Error syncing the database:', err);
});



app.listen(PORT,()=>{
 console.log(`Server has started on ${PORT}`)
})