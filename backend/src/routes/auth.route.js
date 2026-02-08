import express from "express"

const router=express.Router();

router.get('/login',(req,res)=>{
    res.json({message:'Login successful'});
});
router.get('/signup',(req,res)=>{
    res.json({message:'Signup successful'});
});
router.get('/logout',(req,res)=>{
    res.json({message:'Logout successful'});
});
export default router;