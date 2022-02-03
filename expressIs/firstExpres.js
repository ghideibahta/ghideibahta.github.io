const http = require('http');
const express= require('express');
const app = express();

app.listen(3000, () => {
    console.log("your Server is running");
});