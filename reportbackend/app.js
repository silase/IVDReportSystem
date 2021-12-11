const express=require('express')
const app=express()
const cors=require('cors')
const bodyparser=require('body-parser')
const morgan=require('morgan')
const cokiesParser=require('cookies-parser')
const path=require('path')
const httperror=require('http-errors')
const hu
//connected to the database
const mongoose=require('./database/dbconfig')

const PORT=process.env.PORT || 3000
app.get('/',(req,res)=>{

})
//middleware
app.use(cors({
 origin:['http://localhost:4200','http://127.0.0.1:4200'],
 credentials:true
}));

app.use(bodyparser.json())

//session to the users
const passport =require('passport')
var session=require('express-session')

app.use(session({
    name:'myname.sid',
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:3600000,
        httpOnly:false,
        secure:false

    }
}))

app.use(passport.initialize);
app.use(passport.session())
require('./passport-config');

//load and use task route
const userroute=require('./route/register.route')
app.use('/',userroute);

const loginroute=require('./route/login.route')
app.use('/',loginroute);

//listening to the serve
app.listen(PORT,(req,res)=>{
 console.log(`Listening... ${PORT}`)
})