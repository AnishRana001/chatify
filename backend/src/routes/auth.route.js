import express from "express"
import { signup } from "../controllers/auth.controller.js";

const router=express.Router();

router.post('/signup',signup);
router.get('/login',(req,res)=>{
    res.json({message:'Login successful'});
});

router.get('/logout',(req,res)=>{
    res.json({message:'Logout successful'});
});
export default router;