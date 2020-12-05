const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    todo: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    date: {
        type: String
    }
})

const taskModel = mongoose.model('tasks', taskSchema)

module.exports = taskModel