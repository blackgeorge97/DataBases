const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

exports.reminder_list = function(req,res){
    var sql = ' SELECT m.MFirst, m.MLast, m.number, r.ISBN, r.copyNr, r.date_of_borrowing,r.date_of_reminder, e.EFirst, e.ELast FROM `Baseis2019`.`reminder` r INNER JOIN `Baseis2019`.member m ON m.memberID = r.memberID INNER JOIN `Baseis2019`.employee e ON e.empID = r.empId ORDER BY date_of_reminder DESC';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results
        });
    });
};

exports.reminder_create_get = function(req,res){
    sql = 'SELECT empID FROM Baseis2019.employee';
    db.query(sql, (err,results)=>{
        if (err) throw err;
        res.render('reminder_form', {item : results});
    })
    

};

exports.reminder_create_post = function(req,res){
    
    let sql = 'SELECT * FROM `Baseis2019`.`borrows` WHERE date_of_return IS NULL ';
    db.query(sql,(err,results)=>{
        if (err) throw err5;
        let length = results.length;
        var empID= req.body.employee; 
        for (var i=0; i<length; i++){
            sql = `INSERT INTO Baseis2019.reminder VALUES (${empID},'${results[i].memberID}', '${results[i].ISBN}', '${results[i].copyNr}', '${results[i].date_of_borrowing}', CURDATE());`;
            db.query(sql,(err,results2)=>{
                if (err) throw err2;
            })
        }
        res.render('successful_action',{ action : 'remind', type: 'all members'});
    });
};

exports.reminder_update_get = function(req,res){
    res.send('reminder_update_get');
}

exports.reminder_update_post = function(req,res){
    res.send('reminder_update_post');
}

exports.reminder_delete_get = function(req,res){
    res.send('reminder_delete_get');
}

exports.reminder_delete_post = function(req,res){
    res.send('reminder_delete_post');
}