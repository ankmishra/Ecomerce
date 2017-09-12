const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const config = require('./config/db');
const mongoose = require('mongoose');

const port = 3000;

mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
  console.log('you are now connected with '+config.database);
});

mongoose.connection.on('error',(err)=>{
  console.log('error in connection '+err);
})

const app = express();

app.use(bodyParser.json());

const product = require('./routes/product');

const log = require('./routes/log');

app.use(express.static(path.join(__dirname,'public')));

app.use(cors());

app.use('/product',product);

app.use('/log',log);

app.get('/',(req,res)=>{
  res.send('index page');
});



app.listen(port,()=>{
  console.log('server is runing on port'+ port);
})
