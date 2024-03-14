//need to install---> npm install express

var express = require("express");//
var animal = require('./animal');
var mongoose = require("mongoose");
var multer = require('multer');//file upload
var validate = require('./LoginRegister');
let { MongoClient } = require("mongodb");

var app = express();//from previous line.

// const upload = multer({ dest: 'uploads/' })
const storageConfig = multer.diskStorage({
    destination: function (req, f, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, f, cb) {
        cb(null, f.originalname)
    }
  })
  
  const upload = multer({ storage: storageConfig })
  const CountryModel = mongoose.model('country',{"name":String, "capital":String,population:Number});
app.use(express.json());//to recv the request body in the post method

//localhost:8080/validate/login
app.use('/validate',validate);

app.use((req,res)=>{
    console.log(req.url);
    //if request is for login,then no neeed to validate the header
    if(req.url == "/validate/login" || req.url.startsWith('/file_read')){
        req.next();
    }
    //checking whether token is exist or not.if token is not exist throw the error and stop the request
    else if(req.headers['token'] == undefined || req.headers['token'] == ''){
        res.status(400);
        res.json({"message":"pls send the token"});
        res.end();
    }else{
       req.next();//request passed to next step;
    }
    
});

//if request starts with animal it goes to ths place
app.use('/animal',animal);
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

//file upload shuld be in post.
app.post('/file_upload',upload.single('file'),(req,res)=>{
    res.json({"message":"file is uploaded"});
    res.end();
})

//in browser
//http://localhost:8080/file_read?name={your_filename}
app.get('/file_read',(req,res)=>{
    let fileName = req['query']['name']
    res.sendFile("uploads/"+fileName, { root: '.' });
})

app.get("/testmongoose",async (req,res)=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/feb2024');
    //model creation
    const User = mongoose.model('User', { name: String,age:Number });
    //set the data in the model
    const user = new User({ name: 'sample user',age:52 });
    //stores the data
    await user.save();
    res.json({"message":"data is inserted!!"});//json response.
    res.end();
})

//post api
app.post("/user",async(req,res)=>{
    let body = req['body'];//reading from postman request body
    await client.connect();//connect the mongodb
    const database = client.db('feb2024');
    const user = database.collection('user');//collection name
    let data = {
        "nameetet":body['name'],
        "email":body['email'],
        "password":body['password'],
        'mobile':body['mobile'],
        'address':body['address']
        }
    await user.insertOne(data);
    res.json({"message":"data is inserted!!"});//json response.
    res.end();//ths should be end of execution.
})

app.post("/create_countries",async(req,res)=>{
    let body = req['body'];//recv the data from request body
    await mongoose.connect('mongodb://127.0.0.1:27017/feb2024');
    let country = new CountryModel({"name":body['name'],"capital":body['capital'],"population": body['population']})
    await country.save();
    res.json({"message":"country is inserted!!"});//json response.
    res.end();//ths should be end of execution.
})

app.get("/list_countries",async(req,res)=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/feb2024');  
    let data = await CountryModel.find();//read the data from mongodb collection
    res.json(data);//json response.
    res.end();//ths should be end of execution.
})


app.post("/product",async(req,res)=>{
    await client.connect();//connect the mongodb
    const database = client.db('feb2024');
    const user = database.collection('product');//collection name
    for(let i = 1;i<100;i++){
        let data = {
            "name":"prdct"+i,
            "price":"100"+i,
            "desc":"sample desc"+i,           
            }
        await user.insertOne(data);
    }
    res.json({"message":"Producct is inserted!!"});//json response.
    res.end();//ths should be end of execution.
})

app.get("/getProduct",async (req,res)=>{
    let query = req['query'];//read the query params from the url.
    console.log(query);
    let pageNo = query['pageNo']-1;
    await client.connect();//connect the mongodb
    const database = client.db('feb2024');
    const product = database.collection('product');//collection name
    let list = await product.find().skip(pageNo*10).limit(10).toArray();//gets the data from the collection and print in the console
    // console.log(list);
    // // console.log(req['query']['name']);
    res.json(list);//json response.
    res.end();
})

app.post("/status_code",(req,res)=>{
    res.status(200);
    res.end("test status code testing");
})

//starting the sever
app.listen(8080,()=>{
    console.log("server started");
})