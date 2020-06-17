const mongoose = require("mongoose");
const config=require("config")
const db = config.get("mogoURI")

const connectDB = async ()=> {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

module.exports = connectDB;