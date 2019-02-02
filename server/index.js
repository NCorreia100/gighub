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


//apply middleware and set default path
app.use('/static/',express.static(path.resolve(__dirname,'../public')));
app.use(morgan('dev'));
// app.use(bodyParser.json());
app.use(compression());

//routes
app.get('/',(req,res)=> res.send(getHTML(renderToString(<App/>))));



app.listen(8080, function () {
    console.log('listening on port 8080!');
  });

