const User = require('../models/user')
const express = require('express')

const router = express.Router()

router.get('/display/user', async (req, res) => {
    try {
        const user = await User.find()
        res.send(user)
    }
    catch (e) {
        res.status(500).send()
    }
})

router.post('/create/user', async (req, res) => {
    try {
        const user = new User(req.body)
        if (!user) {
            return res.status(400).send()
        }
        user.save()
        res.send(user)
    }
    catch (e) {
        res.status(500).send(e)
    }
})

router.post('/login', async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.findOne({ email: req.body.email, password: req.body.password })
        if (!user) {
            return res.send(null)
        }
        res.send(user)
    }
    catch (e) {
        res.status(500).send()
    }
})

router.post('/delete/user', async (req, res) => {
    try {
        const op = await User.findOneAndDelete({ email: req.body.email })
        if (!op) {
            return res.status(400).send()
        }
        res.send()
    }
    catch (e) {
        res.status(500).send()
    }
})

router.post('/update/password', async (req, res) => {
    try {
        const user = await Tasks.findOne({ email: req.body.email })
        if (!user) {
            return res.status(400).send()
        }
        res.send()
    }
    catch (e) {
        res.status(500).send()
    }
})

module.exports = router