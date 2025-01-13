import  Express, { Router } from "express";
import {registerController,loginController,testController, forgotpasswordcontroller, updateProfileController,   } from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object 
const router = Express.Router();

//routing 
//register || method post
router.post('/register',registerController)

//login || post 
router.post('/login',loginController)

// forgot password || post  
router.post('/forgot-password',forgotpasswordcontroller) 

//test routes 
router.get('/test', testController,requireSignIn,isAdmin)

//protected user route  auth 
router.get("/user-auth" ,requireSignIn,(req,res)=>{
    res.status(200).send({ ok:true});
});

//protected admin route  auth 
router.get('/admin-auth' ,requireSignIn,isAdmin, (req,res)=>{
    res.status(200).send({ ok:true});
});

//update profile
router.put('/profile', requireSignIn, updateProfileController)







export default router


// created an Express router with three routes: /register, /login, and /test. 
// The routes are associated with corresponding controller functions from authController.js, 
// and you've also included middleware functions requireSignIn and isAdmin for the /test route.