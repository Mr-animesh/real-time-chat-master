import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';
import { fileURLToPath } from "url";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from "path";
import {app, server} from './lib/socket.js'

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json({ limit: "5mb" })); //helps to get json of size greater than 10kb
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

if(process.env.NODE_ENV === "production"){
    console.log("heelo from route from frontedn")
    app.use(express.static(path.resolve(__dirname, "../frontend/dist")));
    app.get(/.*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend","dist", "index.html"));
    });
}

const PORT = process.env.PORT;
server.listen(PORT, () =>{
    console.log("Server is running on port: "+ PORT);
    connectDB();
})