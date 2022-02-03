var express = require('express');
var app = express();
var pug = require('pug');

app.set("view engine", "pug")

app.get('/', function (req, res){
    res.render('sample.pug', {title : 'Express', message:'Hey'}
)


})
app.listen(8080, function(){
    console.log('Node server is running...')
});