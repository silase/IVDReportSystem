const passport=require('passport');

module.exports.login=(req,res,next)=>{

    passport.authenticate('local',(err,user,info)=>{
        if(err){return res.status(501).JSON(err); }
        if(!user){ return res.redirect('/login'); }
        req.login(user,(err)=>{
      if(err){return next(err); }
      return res.redirect('/users/'+user.username)
        });
    })(req,res,next);


}