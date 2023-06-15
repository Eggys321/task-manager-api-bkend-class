const express = require('express');
const app = express();
const taskRouter = require('./router/taskRouter');
const mongoose = require('mongoose');
const cors =require('cors')
// config dotenv
require('dotenv/config')
// middlewares
app.use(cors())
app.use(express.json())
// environmental variables
const port = process.env.PORT || 5050
const mongoDB_url = process.env.DBURL

// mongoDB
const connect = ()=>{
    mongoose.connect(mongoDB_url)
    try{
        const DB_MESSAGE =  'DB connected successfully';
        console.log(DB_MESSAGE);

    }catch(err){
        console.log(err);


    }
}

// api
app.get('/',(req,res)=>{
    res.send('welcome home guys')

})

app.use('/task',taskRouter)


// server
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
    connect()
})