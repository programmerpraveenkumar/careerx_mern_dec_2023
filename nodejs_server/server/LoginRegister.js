var express = require("express");//
var router = express.Router();
let { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017/feb2024");

router.post('/login',async(req,res)=>{
    let body = req['body'];
    await client.connect();//connect the mongodb
    const database = client.db('feb2024');
    const user = database.collection('user');//collection name
    let data = {       
        "email":body['email'],
        "password":body['password']     
        }
    let dbData = await user.find(data).toArray();
    if(dbData.length == 0){
        res.status(400);
        res.json({"message":"you are wrong."});
    }else{
        //oly login success
        let token_txt = btoa(dbData[0].email+new Date());//base64 cnversion
        res.status(200);
        res.json({"message":"you are correct.","token":token_txt});
    }
    // console.log(dbData);    
    res.end();
})
module.exports = router;
