//need to install---> npm install express

var express = require("express");//
let { MongoClient } = require("mongodb");
var app = express();//from previous line.

app.use(express.json());//to recv the request body in the post method

const client = new MongoClient("mongodb://127.0.0.1:27017/feb2024");
//get api
app.get("/user",async (req,res)=>{
    await client.connect();//connect the mongodb
    const database = client.db('feb2024');
    const user = database.collection('user');//collection name
    let list = await user.find().toArray();//gets the data from the collection and print in the console
    console.log(list);
    // console.log(req['query']['name']);
    res.end("this is get method");
})

//post api
app.post("/user",async(req,res)=>{
    // console.log(req['query']);
    // console.log(req['query']['email']);
    // console.log(req['body']);
    let body = req['body'];
    await client.connect();//connect the mongodb
    const database = client.db('feb2024');
    const user = database.collection('user');//collection name
    let data = {
        "name":body['name'],
        "email":body['email']
    }
    await user.insertOne(data);
    res.end("data is inserted!!");
})


app.post("/status_code",(req,res)=>{
    res.status(200);
    res.end("test status code");
})

app.post('/login',(req,res)=>{
    let body = req['body'];
    if(body['email'] == 'admin@gmail.com' && body['password']=='admin'){
        res.status(200);
        res.end("you are correct");
    }else{
        res.status(400);
        res.end("you are wrong..");
    }
})


//starting the sever
app.listen(8080,()=>{
    console.log("server started");
})