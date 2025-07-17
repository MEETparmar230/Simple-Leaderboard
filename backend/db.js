import mongoose from 'mongoose'


const connectToDB = async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log("mongodb connected")
    }
    catch(err){
        console.error("Error while connecting to DATABASE",err)
    }

}

export default connectToDB;