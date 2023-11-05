import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from './routes/UserRoute.js'

const app = express();
// const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/fullstack_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database connected..'))

app.use(cors());
app.use(express.json());
app.use(UserRoute)

app.listen(5000, ()=> console.log('Server is running...'))