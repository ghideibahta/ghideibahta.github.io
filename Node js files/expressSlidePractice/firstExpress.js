const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=> {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
         console.log("hello");
    }
    if(url === '/message' && method === 'POST'){
       console.log("kemey");
    }
});
 server.listen(3000);