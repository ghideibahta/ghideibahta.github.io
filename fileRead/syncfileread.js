var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    var data = fs.readFileSync('appendf.txt', 'utf-8');

        console.log(data);
        
}).listen(8080);