const mongoose = require('mongoose');
const Schema = mongoose.Schema

const taskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },
    tags:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
},{timestamps:true})

const TASKS = mongoose.model('singleTask',taskSchema)
module.exports = TASKS