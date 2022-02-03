const http = require('http');
const express = require('express');

const bodyParser = require('body-parser');
const app = express();

const port = 3000;
app.use(bodyParser.urlencoded());

app.listen(port, function(){
    console.log('Examle of middleWare!');
});

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended : false})

app.post('/login', urlencodedParser, function(req, res) {
    res.send('welcome', ' + req.body.username')
})

app.post('/api/users', jsonParser, function (req, res) {

});
