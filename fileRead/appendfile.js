var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.appendFile('appendf.txt','dehando', function(err){

        if(err) throw err;
        //console.log('saved');

        res.end('saved');
    });
}).listen(9000);