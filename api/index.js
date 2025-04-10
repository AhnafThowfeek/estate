import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutr from './routs/user.route.js';
import authRouter from './routs/auth.route.js';

dotenv.config();

const app = express();



const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() =>{
    console.log("Database connected")
    app.listen(PORT, () =>{
        console.log(`server is on port ${PORT}`);
    });
})
.catch((error) => console.log(error));

app.use(express.jason());
app.use('/api/user', userRoutr);
app.use('/api/auth', authRouter);
