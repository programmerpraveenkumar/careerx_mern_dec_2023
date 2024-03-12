var express = require("express");//
var router = express.Router();

router.get('/lion',(req,res)=>{
    res.status(200);
    res.json({"message":"this is lion"});
})
router.get('/tiger',(req,res)=>{
    res.status(200);
    res.json({"message":"this is tiger"});
})


module.exports = router;