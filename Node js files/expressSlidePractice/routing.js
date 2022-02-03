const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded);
app.get('/add-product', (req,res, next) => {
    console.log('in the middleware!');
    res.send('<form action = "/product" method = "post"><input name= "title"><button type="submit"> Submit></button></form>')
});
app.post('/product', (req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>You submitted successfully</h1>');
});