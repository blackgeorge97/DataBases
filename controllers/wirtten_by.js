const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

exports.written_by_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`written by`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results
        });
    });
};

exports.written_by_create_get = function(req,res){
    res.send('not implemented: written_by_create GET');
};

exports.written_by_create_post = function(req,res){
    res.send('not implemented: written_by_create POST')
};