const mongoose = require('mongoose')
// const url = 'mongodb+srv://appMain:6j3bF57Z1W4bdzxl@cluster0.3mbah.mongodb.net/Yukti-Server?retryWrites=true&w=majority'
const url2 = 'mongodb://127.0.0.1:27017/TaskApp'
mongoose.connect(url2,{
    useNewUrlParser:true,
    useCreateIndex:true
}).then((result)=>{
    console.log('connected to server')
}).catch((error)=>{
    console.log(error);
    console.log('Error while connecting')
})