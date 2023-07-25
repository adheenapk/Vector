const express=require("express");
const app=express();
const mongoose=require("mongoose");

const User=require("./models/Schema");

mongoose.connect("mongodb+srv://adheenapkckl:FihZYt0EjE8Yz0DP@cluster0.62uwq5n.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected successfully")
})
.catch((err)=>{
console.log("Error")
})

app.use(express.json());
 const passwrd=(req,res,next)=>{
    const password=req.body.password;
    if (password=="adheena")
    next();
    else
    console.log("wrong password")

}
app.get("/",(req,res)=>
{
    res.send("hello")
}
);

app.post("/",passwrd,(req,res)=>{

    console.log(req.body)
    res.send(req.body)

});

app.listen(
    7500,()=>{
        console.log("server listening")
    }
);