const http = require('http');
const express = require('express');

const app = express();
const port = 3000;

app.listen(port, function(){
    console.log('Examle of middleWare!');
})

app.use((req, res, next) => {
    console.log('This is first');
    next();
});
app.use('/add-product', (req, res, next) => {
    console.log('This second');
    res.send('<h1>The "Add Product"</h1>');
});

app.use('/', (req, res, next) => {
    console.log('The third middleware');
    res.send('<h>"This is good"</h>');
})