const express = require("express");
const connectDB = require("./config/db")

const PORT =  process.env.PORT || 4000;

const app = express();

connectDB();

app.use(express.json({extended:false}));

// Routes

//server port
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))