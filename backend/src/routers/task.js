const express = require('express')
const Task = require('../models/task')

const router = express.Router()

router.post('/create/task', async (req, res) => {
    try {
        const task = await Task(req.body)
        if (!task) {
            return res.status(400).send()
        }
        await task.save()
        const alltask = await Task.find({ email: req.body.email })
        res.send({"res" : "ok"})
    }
    catch (e) {
        res.status(500).send(e)
    }
})

router.post('/display/all', async (req, res) => {
    try {
        const task = await Task.find({ email: req.body.email })
        return res.send(task)
    }
    catch (e) {
        res.status(500).send()
    }
})

router.post('display/id', async (req, res) => {
    try {
        const task = await Task.findOne({ email: req.body.email, task_id: req.body.task_id })
        if (!task) {
            return res.status(400).send()
        }
        res.send(task)
    }
    catch (e) {
        res.status(500).send()
    }
})

router.post('display/task', async (req, res) => {
    try {
        const search = req.body.task
        const task = await Task.find({ email: req.body.email, task: new RegExp(search, 'i') })

        res.send(task)
    }
    catch (e) {
        res.status(500).send()
    }
})

router.post('/delete/todo', async (req, res) => {
    try {
        const op = await Task.deleteMany({ email: req.body.email, todo: req.body.todo, description: req.body.description })
        if (!op) {
            return res.status(400).send()
        }
        const task = await Task.find({ email: "kumarsurajojha6012001@gmail.com" })
        res.send(task)
    }
    catch (e) {
        res.status(500).send(e)
    }
})

// for admin
router.get('/display/admin', async (req, res) => {
    try {
        const task = await Task.find()
        res.send(task)
    }
    catch (e) {
        res.status(500).send()
    }
})

module.exports = router