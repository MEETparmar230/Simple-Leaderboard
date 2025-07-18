import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'
import connectToDB from './db.js'
import cors from 'cors'
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors({
    origin: [
      "https://simple-leaderboard-ochre.vercel.app",
      "http://localhost:5000"
    ],
  }
))
connectToDB()

const PORT = process.env.PORT

app.get("/",(req,res)=>{
    res.send("server is running")
})
app.use("/user",userRouter)


app.listen(PORT || 8080,()=>{
    console.log(`server is runnig on ${PORT||8080}`)
})