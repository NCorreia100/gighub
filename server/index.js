//denepdencies
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
var path= require('path');

//static files
let html = require('./index.html')

//apply middleware and set default path
app.use(express.static(path.resolve(__dirname,'./client/public')));

//routes
app.get('/',(req,res)=> res.send(html));



app.listen(8080, function () {
    console.log('listening on port 8080!');
  });