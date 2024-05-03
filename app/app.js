
import dotenv from 'dotenv';
import express from 'express';
import dbConnect from "../config/dbConnect.js";
import userRoutes from "../routes/usersRoute.js";

dotenv.config();


//db connect
dbConnect();
const app = express();


//routes
app.use('/',userRoutes)

export default app;