const express=require('express')
const route=express.Router()
//load model
const UserController=require('../controllers/register.controller')
route.post('/register',UserController.register)

module.exports=route;