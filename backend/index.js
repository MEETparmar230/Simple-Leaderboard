import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'
import connectToDB from './db.js'
dotenv.config()

const app = express()

app.use(express.json())

connectToDB()

const PORT = process.env.PORT

app.get("/",(req,res)=>{
    res.send("server is running")
})
app.use("/user",userRouter)


app.listen(PORT || 8080,()=>{
    console.log(`server is runnig on ${PORT||8080}`)
})