import express from 'express';
import authRoutes from '../routes/auth.route.js';
import messageRoute from '../routes/message.route.js';
import dotenv from 'dotenv';
import { connectDB } from '../lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from "path";
import { app, server } from '../lib/socket.js';

dotenv.config();

const PORT = process.env.PORT;

const __dirname = path.resolve();

// Middleware to parse JSON body
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoute)

if(process.env.NODE_ENV === 'production')
{
  app.use(express.static(path.join,__dirname,"../client/dist"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});