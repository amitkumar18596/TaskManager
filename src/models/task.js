const mongoose = require ('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema({
    Description : {
        "type" : String,
        trim : true,
        required : true
    },
    Completed :{
        "type": Boolean,
        default : false
    }
})

taskSchema.pre('save', async function(next){ //before doing somethng
    
    console.log('just before saving')


    next()
}) 

const tasks = mongoose.model('tasks', taskSchema)

module.exports = tasks