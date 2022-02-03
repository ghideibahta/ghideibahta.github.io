const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded());

app.listen(port, function(){
    console.log('Examle of middleWare!');
});

app.use('/add-product', (req,res,next) => {
    console.log("In the middle");
    res.send('<form action = "/product" method="post"> <input name ="title"><button type="submit">Submit</button></form>');
});

app.use('/product', (req, res, next)=> {
    console.log(req.body);
    res.redirect('/');
});