const express=require('express')
const route=express.Router()
const passport=require('passport');

//load model
const loginController=require('../controllers/login.controllers')
route.post('/login',loginController.login)

//after login
route.get('/user',isvalidyuser,(req,res,next)=>{
  return res.status(200).json(req.user)
});
route.get('/logout',isvalidyuser,(req,res,next)=>{
  req.logout();
  return res.status(200).json({message:"Success logout"})
})


function isvalidyuser(req,res,next){
 if(req.isAuthenticated()) next()
 else return res.status(401).json({message:"invalidy request"})
}
module.exports=route;