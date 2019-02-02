//denepdencies
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')
const app = express();
const path= require('path');
const morgan = require('morgan');
const compression = require('compression');
const React = require('react')
const {renderToString} = require('react-dom/server');

//local files
let {getHTML} = require('../public/index.html')
let App = require('../client/app.jsx').default;
let controller = require('./controller');


//apply middleware and set default path
app.use('/static/',express.static(path.resolve(__dirname,'../public')));
app.use(morgan('dev'));
// app.use(bodyParser.json());
app.use(compression());

//routes
app.get('/',(req,res)=> res.send(getHTML(renderToString(<App/>))));

app.get('/services',(req,res)=>{
  let query = req.params.query || 0;
  console.log('request:',query)
  controller.getServices(query,(err,data)=>{
    if(err) console.log(err)
    else res.send(data)
  })
})

app.get('/requests',(req,res)=>{
  let query = req.params.query || null;
  controller.getRequests(query,(err,data)=>{
    if(err) console.log(err)
    else res.send(data)
  })
})

app.listen(8080, function () {
    console.log('listening on port 8080!');
  });

