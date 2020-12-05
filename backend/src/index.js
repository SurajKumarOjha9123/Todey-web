require('./db/mongoose')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

const UserRouter = require('./routers/user')
const TaskRouter = require('./routers/task')

app.use(UserRouter)
app.use(TaskRouter)

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    try {
        res.send('Todo App Server')
    }
    catch (e) {

    }
})

app.listen(port, () => {
    console.log('port is running on port ', port)
})