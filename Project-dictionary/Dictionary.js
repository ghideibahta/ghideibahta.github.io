var express = require('express');

var app = express();
var port = 4000;

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5555');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Pass to next layer of middleware
  next();
})

app.listen(port, () => console.log("Server start on port: " + port))

app.use(express.static("./"));

app.get('/', (req, res) => {

  var word= req.query.word;
  // fetch the data and put it to res to send it back to client requesting it
  var query= require('./word');
  query.queryWord(word, res);
  
})

app.get('/Dictionary', (req, res) => {
  var path = require('path');
  res.sendFile(path.join(__dirname, '/dict.html'));
})
