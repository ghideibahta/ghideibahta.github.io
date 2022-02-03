
// request based on jquery
$(document).ready(()=>{
  $('#lookup').click(()=>{
    var word= $('#word').val();
    $.ajax({
      "url": "http://localhost:4000/", 
      "data": {"word": word}, 
      "type": "GET",
      "success": updateHtml,
      "error": errorHandler
      });
  })

}
);

$(document).ready(()=>{
  $("#word").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#lookup").click();
    }
  });
})

function updateHtml(data){

  var showThis= "";
  for(var i=0; i<data.length; i++){
    var type= data[i].wordtype;
    var def= data[i].definition;
    showThis+= "<div class= 'row'>"+ (i+1) + "("+type+")"+ " :: "+def + ' </div> <hr>'
  }
  $("#show").html(showThis);

}

function errorHandler(){
  console.log('Server side error');
}


