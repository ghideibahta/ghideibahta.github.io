exports.oper = function (req,res,vals) {
    var a = res.quer;
    var b = parseInt(a.n1);
    var c = parseInt(a.n2);
    var operation= q.operation;

    var result;
  
    if(operation=='add'){
      result= n1+n2;
    }else if(operation=='subtract'){
      result= n1-n2;
    }else if(operation=='multiply'){
      result= n1*n2;
    }else{
      result=n1/n2;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<!DOCTYPE html>
    <html>
       <head><meta charset=\"utf-8\"/>
        <title>Calculator Web Site</title>
       </head>
        <body>
         <p>The sum is: ${String(sum)}</p>
        </body>
       </html> ` );
    return res.end();
    };