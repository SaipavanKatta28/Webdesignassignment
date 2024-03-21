var mongoose=require("mongoose")

module.exports= new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true,unique:true}
}, {collection:"users"});
