const mongoose=require('mongoose')
const User=require('../models/register.model')
module.exports.register=(req,res,next)=>{

    var user=new User();
    user.firstname=req.body.firstname;
    user.middlename=req.body.middlename;
    user.lastname=req.body.lastname;
    user.email=req.body.email;
    user.password=hashPassword(req.body.password);
    user.save((err,doc)=>{
        if(!err){
           res.send(doc);
        }else{
            res.send(err)
        }
    })
}