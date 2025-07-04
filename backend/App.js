import dotenv from 'dotenv';
dotenv.config();

import  express from 'express';
import morgan from 'morgan';
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
import cros from 'cors';


const app = express();

const allowedOrigins = [
  'https://mern-ai-chatbot-frontend-coral.vercel.app',
  'http://localhost:5173'           
];

//middlewares
app.use(cros({
    origin:allowedOrigins,
     credentials:true,methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
   allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());



// routes 

app.use('/api/v1',appRouter);


//connection and linsteners
export default app;