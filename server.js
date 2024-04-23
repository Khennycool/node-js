//require express
const express = require('express')
const userRouter = require('./Routes/UserRoute')

//mngoose connection and initialized the app with express 
const mongoose = require('mongoose')
const app = express()


//created home route
app.get('/',(req,res) =>{
  res.send('server homepage !!')

})

app.use('/',userRouter)

//mongodb+srv://kolawoledhikrullah93:0xQWd4ntVKmNyznV@cluster0.vwhyeik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0




const PORT = 5500


mongoose.connect('mongodb+srv://kolawoledhikrullah93:0xQWd4ntVKmNyznV@cluster0.vwhyeik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() =>{
  app.listen(PORT, () =>{
    console.log(`server now running on port ${PORT}`);
  })
}).catch((error) => console.log(error))


//listen to port number
// console.log(express);