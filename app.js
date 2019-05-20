const express = require('express');
const path = require('path');
const mysql = require('mysql');
const configDatabse = require('./configuration/mysql');
const configServer = require('./configuration/server');


const app = express();
configServer.openServer(app);
configDatabse.CreateDatabase();
//configDatabse.FillDatabase();


app.use(express.static(path.join(__dirname, 'public')));

app.get('/getposts',(req,res)=>{
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err,results)=>{
        if (err) throw err;
        console.log(results);
        res.sendFile(path.join(__dirname), 'public', 'index.html');
    });
});