const express=require('express')
const route=express.Router()
//load model
const loginController=require('../controllers/login.controllers')
route.post('/login',loginController.login)

module.exports=route;