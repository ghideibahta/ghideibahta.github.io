const express= require('express');
const res = require('express/lib/response');
const app= express();


app.get('/', (req, res,)=> {
    res.send('<h1>helloWorld</h1>');
    console.log("hello");
});

app.listen(8080,(req, res) => {
console.log("Server running!");
});