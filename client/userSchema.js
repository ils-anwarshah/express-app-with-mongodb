const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        unique:false,
        required:true,
        type:String
    },
    email:{
        unique: true,
        required: true,
        type: String,
    },
    password:{
        type: String,
        required:true,
    }
})

module.exports = userSchema
