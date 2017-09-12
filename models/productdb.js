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

const product = module.exports = mongoose.model('product',productSchema);

module.exports.getProductById = function(id,callback){
  User.findById(id,callback);
}

module.exports.getProductByName = function(productname,callback){
  const query = {pname:productname}
//  console.log(username);
  User.findOne(query,callback);
}

module.exports.addProduct = function(newProduct, callback){
  newProduct.save(callback);
}
