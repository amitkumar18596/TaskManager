const mongoose = require ('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
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

userSchema.pre('save', async function(next){ //before doing somethng
    const user = this // to make for understanadable 'this' is assigned to user
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    console.log('just before saving')


    next()
}) 

const users = mongoose.model('users', userSchema) 

module.exports = users