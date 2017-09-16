const mongoose = require('mongoose');
const config = require('../config/db');

const productSchema = mongoose.Schema({
  pname:{
    type:String,
    required:true
  },
  bname:{
    type:String,
    required:true
  }
});

const productDetailSchema = mongoose.Schema({
  type:{
    type:String,
    required:true
  },
    brand:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  money:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
});

const product = module.exports = mongoose.model('product',productSchema);
const productdetail = module.exports = mongoose.model('productdetail',productDetailSchema);


module.exports.getProductdetail = function(callback){
//  console.log(id);
  productdetail.find({},callback);
}

module.exports.getProductByName = function(productname,callback){
  const query = {pname:productname}
//  console.log(username);
  product.findOne(query,callback);
}

// module.exports.getProductdetail = function(err,data,callback){
//   if(err){
//     console.log(err);
//   }
//   //console.log(data);
//   (productdetail.find({}),callback);
// }

// module.exports.getProductById = function(id,callback){
//   console.log(id);
//   product.find({},callback);
// }

module.exports.getProductByType = function(type,callback){
  const query = {type:type}
//  console.log(username);
  productdetail.find(query,callback);
}

module.exports.getProductByBrand = function(brand,callback){
  const query = {brand:brand }
//  console.log(username);
  productdetail.find(query,callback);
}

module.exports.addProduct = function(newProduct, callback){
  console.log(newProduct);
  newProduct.save(callback);
}
