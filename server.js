const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

// EXPRESS + CORS SETUP //
const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// ROUTES //
const authRoutes = require('./routes/Auth');
const postRoutes = require('./routes/Post');
const getRoutes = require('./routes/Get');
app.use('/get', getRoutes);
app.use('/auth', authRoutes);
app.use('/post', postRoutes);

// DATABASE CONNECTION //
mongoose.connect("mongodb+srv://" + process.env.DB_USERNAME+":" + process.env.DB_PASSWORD + "@laravel1.q2vv7.mongodb.net/georeminders?retryWrites=true&w=majority", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to DB.");
    }
});

// SERVER LISTEN //
app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
})