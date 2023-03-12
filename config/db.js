const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async (uri) => {
    console.log("Connected DB")
    mongoose.set("strictQuery", false)
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;