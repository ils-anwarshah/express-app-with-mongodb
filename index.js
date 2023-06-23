require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
// const route  = require('./router/routing')
const mongoose = require('mongoose')
const {postData, getdata} = require('./router/routing')

app.use(express.json())

const URI  = process.env.MongoConnectionURL
// console.log(URI);

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('connected Successfully');
})
.catch((err)=>{
    console.log('error', err);
})

// using Router as a middleware
app.use(postData)

app.listen(PORT,(err)=>{
    if(err){
        console.log('Some error occured');
    }else{
        console.log(`listening on port ${PORT}`)
    }
})