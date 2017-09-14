const express = require('express');
const bodyParser = require('body-parser');
const models = require('../models/productdb');
const product = require('../models/productdb');

const router = express.Router();



router.post('/new',(req,res,next)=>{
  let newproduct = new product({
    pname:req.body.pname,
    bname:req.body.bname
  });

  product.getProductdetail((err,response)=>{
    if(err){
      console.log(err);
    }else{
      res.json({response:response});
    }
  })
  console.log(req.body.pname);
  product.addProduct(newproduct,(err,user)=>{
    if(err){
      res.json({sucess:false,msg:"failed to submit"});
    }else{
      res.json({sucess:true,msg:"product register"});
    }
  });
  //res.send('users registartion page');
});

router.get('/',(req,res,next)=>{
  product.getProductdetail((err,response)=>{
    if(err){
      console.log(err);
    }else{
      res.json(response);
    }
  })
})

router.get('/:type',(req,res,next)=>{
  type = req.params.type;
  product.getProductByType(type,(err,response)=>{
    if(err){
      console.log(err);
    }else{
      res.json(response);
    }
  })
})

router.get('/:type/:brand',(req,res,next)=>{
  brand = req.params.brand;
  product.getProductByBrand(brand,(err,response)=>{
    if(err){
      console.log(err);
    }else{
      res.json(response);
    }
  })
})
module.exports = router;
