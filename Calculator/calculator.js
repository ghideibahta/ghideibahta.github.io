const express= require('express');
const app= express();

app.get('/', (req, res,)=> {
    res.sendFile(__dirname+"/" + "Calculator.html")
 
})

 app.use('/', (req,res,next) => {
   
  var q = req.query;
  var v1= parseInt(q.first);
  var v2= parseInt(q.second);

  var operation= q.operation;
  var result;
  
  if(operation=='divide'){
    result=v1/v2;
  }else if(operation=='subtract'){
    result= v1-v2;
  }else if(operation=='multiply'){
    result= v1*v2;
  }
  else{
    result= v1+v2;
  }
  
  res.send('<h1>result is </h1>' + result+ "<br><a href='http://127.0.0.1:5500/html-lab/Calculator/Calculator.html'>Anathor Calculation</a>");
});


app.listen(9000, function(req, res){
  console.log("Server running!");
});

