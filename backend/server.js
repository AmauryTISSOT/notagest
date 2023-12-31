require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const filesRouter = require("./routes/files");

// express app
const app = express();

// json middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// create routes
app.use('/api/files', filesRouter);

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log("Listening on http://localhost:4000");
        });
    })
    .catch((error) => {
        console.log(error);
    });