//need to install---> npm install express
var express = require("express");//

var app = express();//from previous line.

//get api
app.get("/user",(req,res)=>{
    res.end("this is get method");
})

//post api
app.post("/user",(req,res)=>{
    res.end("this is post method");
})

//starting the sever
app.listen(8080,()=>{
    console.log("server started");
})