const express = require("express");
const connectDB = require("../config/db")
const cookieParser = require("cookie-parser");
const usersRoute = require("./routes/users");
const PORT =  process.env.PORT || 4000;

const app = express();


//DB Config

connectDB();


app.use(express.json({extended:false}));
app.use(cookieParser());
// Routes
app.use("/api/users", usersRoute)
//server port
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))