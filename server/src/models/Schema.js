const mongoose=require("mongoose");
const userschema=new mongoose.Schema({
    name:
    {
        type:String
    },
    email:
    {
        type:String
    },
    password:
    {
        type:String
    }
});

const User= mongoose.model("USER",userschema);

module.exports=User;