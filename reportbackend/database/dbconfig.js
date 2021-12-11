//connection to mongodb
const mongoose=require('mongoose')
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/reportingSystem',{useNewUrlParser:true}).then(()=>{
    console.log('connected to the database');
})
module.exports=mongoose;