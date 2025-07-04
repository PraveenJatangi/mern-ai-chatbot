import dotenv from 'dotenv';
dotenv.config();

import  express from 'express';
import morgan from 'morgan';
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
import cros from 'cors';


const app = express();

//middlewares
app.use(cros({
    origin:"https://mern-ai-chatbot-frontend-coral.vercel.app/",
     credentials:true}));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());



// routes 

app.use('/api/v1',appRouter);


//connection and linsteners
export default app;