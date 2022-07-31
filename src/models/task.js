const mongoose = require ('mongoose')
const validator = require('validator')

const tasks = mongoose.model('tasks', {
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

module.exports = tasks