const express = require('express');
const bodyParser = require('body-parser');
const models = require('../models/productdb');
const product = require('../models/productdb');

const router = express.Router();

router.get('/',(req,res,next)=>{
  res.send('product page');
});

router.post('/new',(req,res,next)=>{
  let newproduct = new product({
    pname:req.body.pname,
    bname:req.body.bname,
  });

  product.addProduct(newproduct,(err,user)=>{
    if(err){
      res.json({sucess:false,msg:"failed to register"});
    }else{
      res.json({sucess:true,msg:"user register"});
    }
  });
  //res.send('users registartion page');
});


module.exports = router;
