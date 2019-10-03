//denepdencies
const express = require('express');
// const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const compression = require('compression');
const app = express();


//apply middleware and set default path
app.use('/',express.static(path.resolve(__dirname,'public')));
app.use(morgan('dev'));
app.use(compression());
// app.use(bodyParser.json());

//routes
app.get('/servicemap',(req,res)=>{
    res.sendFile('client-bundle.js') 
})

// app.get('/services',(req,res)=>{
//   let query = req.params.query || 0;
//   console.log('request:',query)
//   controller.getServices(query,(err,data)=>{
//     if(err) console.log(err)
//     else res.send(data)
//   })
// })

// app.get('/requests',(req,res)=>{
//   let query = req.params.query || null;
//   controller.getRequests(query,(err,data)=>{
//     if(err) console.log(err)
//     else res.send(data)
//   })
// })

app.listen(8081, function () {
    console.log('listening on port 8081!');
});
