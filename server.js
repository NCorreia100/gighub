//denepdencies
const express = require('express');
// const bodyParser = require('body-parser');
const morgan = require('morgan');


const compression = require('compression');
const app = express();


//apply middleware and set default path
app.use('/static/',express.static(path.resolve(__dirname,'public')));
app.use(morgan('dev'));
app.use(compression());
// app.use(bodyParser.json());

//routes
app.get('/',(req,res)=> res.sendFile('index.html'));

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

app.listen(8080, function () {
    console.log('listening on port 8080!');
});

