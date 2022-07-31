const mongoose = require ('mongoose')
const validator = require('validator')

const users = mongoose.model('users', {
    name : {
        "type" : String,
        required : true,
        trim : true
    },
    email:{
        type : String,
        required : true,
        trim: true,
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password :{
        type : String,
        required : true,
        minLength : 7,
        trim: true,
        validate(value){
            if (value.includes('password')){
                throw new Error('Password cant contain the term password')
            }
        }
    },
    age :{
        "type": Number,
        // required : true,
        validate(value){
            if (value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }
}) 

module.exports = users