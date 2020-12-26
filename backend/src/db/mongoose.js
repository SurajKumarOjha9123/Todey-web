const mongoose = require('mongoose')
const url2 = "mongodb+srv://todoApp:9jf0IanTarFyYg8t@cluster0.penme.mongodb.net/TaskApp?retryWrites=true&w=majority"
mongoose.connect(url2,{
    useNewUrlParser:true,
    useCreateIndex:true
}).then((result)=>{
    console.log('connected to server')
}).catch((error)=>{
    console.log(error);
    console.log('Error while connecting')
})