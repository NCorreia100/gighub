//controller retrives data from database and from API

dbConn = require('../database/dbConn')

module.exports.getServices=(query,callback)=>{
//     let q;
// if(query===0) q = ' NOT NULL';
// else q = query;
// console.log('query:',q)
    dbConn.query(`SELECT * FROM services WHERE TYPE IS NOT NULL ;`,(err,output)=>{
        if(err) callback(err)
        else  callback(null,output)
    })


}

module.exports.getRequests=(query,callback)=>{
    let q;
if(query===null) q = 'IS NOT NULL';
else q = '='+q;

    dbConn.query(`SELECT * FROM requests WHERE 'TYPE' IS NOT NULL`,(err,output)=>{
        if(err) callback(err)
        else  callback(null,output)
    })


}