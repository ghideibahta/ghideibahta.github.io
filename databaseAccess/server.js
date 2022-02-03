var express = require('express');
var app = express();

app.get('/', function(req,res){
    var sql = require('mssql');

    var config = {
        user : 'sa',
        password: 'mypassword',
        server: 'localhost',
        database: 'SchoolDb',
        options: {trustServerCertificate: true }
    };

    sql.connect(confiq, function(err){
        if(err) console.log(err);
        
        var request = new sql.Request();

        request.query('select * from Student', function(err, recordset){
            if (err)  console.log(err)
            res.send(recordset);
        });
    });
});

var server = app.listen(5000, function(){
    console.log('Server is running');
});