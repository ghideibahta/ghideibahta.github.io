const express= require('express');
const app= express();
//const port= 8000;
let totalscore=0;
let index=0;
const questions= ['1, 1, 2, 3, 5',
                '1, 4, 9, 16, 25', 
                '2, 3, 5, 7, 11',
                '1, 2, 4, 8, 16',
                '1, 2, 3, 4, 5',
              ];
const solution = [9, 36, 13, 32, 6];



app.use(express.json());
app.use(express.urlencoded());

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
  index=0;
  res.render('index', {totalscore: totalscore, sequence: questions[index]});
});


app.post('/submit', function(req, res){

  
  var input= req.body.solution;
  if(input== solution[index]){
    totalscore++;
  }
  index++;
  if(index==questions.length){
    res.render('result', {totalscore: totalscore, max: questions.length});
    index=0;
    totalscore=0;
    return;
  }
  res.render('index', {totalscore: totalscore, sequence:questions[index] });

  
});



app.listen(8000, ()=> console.log("Server start on port "))


