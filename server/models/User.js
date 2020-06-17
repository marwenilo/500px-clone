const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
name:{
    type:String,
    maxlength:50
},
email:{
    type:String,
    trim:true,
    unique: 1
},
password:{
    type:String,
    minlength:6
},
lastname:{
    type:String,
    maxlength:50
},
role:{
    type:Number,
    default: 0
},
avatar:{
    type: String
},
token:{
    type:String
},
tokenExp:{
    type: Number
},
date: {
    type: Date,
    default: Date.now
   }



})