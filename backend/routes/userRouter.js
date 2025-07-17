import { Router } from "express";
import { getUsers, newUser, points } from "../controlers/userController.js";

const router = Router();

//to get all users 
router.get("/",getUsers)

//to create new user
router.post("/",newUser)

//to increment points
router.post("/claim",points)

export default router;