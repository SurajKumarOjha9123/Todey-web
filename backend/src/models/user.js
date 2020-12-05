const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    email : {
        type : String,
        unique : true,
        required : true,
        trim : true,
        validate : {
            validator(value){
                if(!validator.isEmail(value)){
                    throw new Error('Invalid email')
                }
            }
        }
    },
    password : {
        type : String,
        required : true,
        trim : true,
        validate: {
            validator(value){
                if(value.length < 6){
                    throw new Error('password too short')
                }
            }
        }
    }
})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel