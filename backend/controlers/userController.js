import ClaimHistory from "../models/claimHistory.js"
import User from "../models/user.js"


//get all users
export const getUsers= async (req,res)=>{
    try{

    const users = await User.find({});
   
    res.status(200).json(users);
    
}
catch(err){
    console.log("internal server error",err)
}
}

//creating new user
export const newUser = async (req,res)=>{
    try{
    if(!req.body || !req.body.name){
        console.log("No data Arrived from frontend to create user")
    }
    else{
        const newUser = await User.create(req.body)
        res.status(201).json({newUser,message:"new user added"})
        console.log("new user Created")
    }
    }
    catch(err){
        console.log("internal server error",err)
    }
}

//give points to user

export const points = async(req,res)=>{
try{
    const { userId } = req.body;
   
    const user = await User.findById( userId )

    if(!user){
        console.log("User not exists")
        return res.status(404).json({message:'User not exists'})
    }

    //genreate random points
    const increment = Math.floor(Math.random()*10+1)

    user.points += increment;
    await user.save();

    const updatedUser = user;
    //adding claim to cliam history
    await ClaimHistory.create({
      userId: user._id,
      pointsClaimed: increment
    });

    res.status(200).json({updatedUser,message:'points incremented'})
    console.log('points incremented')
    }

    catch(err){
        console.log({error:"internal server error",err})
    }
}
