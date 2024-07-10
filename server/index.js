import express from "express"
import mongoose from "mongoose"
import dontenv from 'dotenv'
import userRoutes from './routes/user.js'
import cors from 'cors'
import bodyParser from "body-parser"


dontenv.config()

const app=express()
app.use(cors())
app.get('/',(req,res)=>{
    res.send("Hello welcome to my  world")

})
app.use(bodyParser.json())

app.use('/user',userRoutes)
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server Running on the PORT ${PORT}`)
})

const DB_URL = process.env.CONNECTION_URL
mongoose.connect(DB_URL,).then(()=>{
    console.log("MongoDB database connected ")
}).catch((error)=>{
    console.log(error)
})