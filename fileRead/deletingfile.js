var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
fs.unlink('demo2.txt', function(err){

    if (err) throw err;

    console.log('deleted!')

   });
}).listen(8080);
