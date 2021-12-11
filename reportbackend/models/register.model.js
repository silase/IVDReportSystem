const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const UserSchema=new mongoose.Schema({
    firstname:{ type:String, required:true,trim:true},
    middlename:{ type:String, required:true,trim:true},
    lastname:{ type:String, required:true,trim:true},
    email:{ type:String, required:true,trim:true,unique:true},
    password:{ type:String, required:true,trim:true,minlength:8},
    creation_at:{type:date,required:true}

})
UserSchema.statics.hashPassword=function hashpassword(password){
    return bcrypt.hashSync(password,10);
}

UserSchema.methods.isValidy=function (hashedPassword){
    return bcrypt.compareSync(hashedPassword,this.password)
}

const User=module.exports=mongoose.model('User',UserSchema);