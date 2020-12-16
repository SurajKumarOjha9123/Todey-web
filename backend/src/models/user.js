const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel