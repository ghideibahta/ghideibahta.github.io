$(document).ready(function () {

    let lost = false;
  
    $("#start").click(function () {
      $("#status").text('Click the "S" to begin');
  
      if (!lost) {
        $("div .boundary").mouseover(
          function(){
            lostAction();
            lost = true;
          });
        $("#maze").mouseleave(
          function(){
            lostAction();
            lost = true;
          });
      }
      else {
        $("div .boundary").removeClass("youlose");
        $("#end").mouseenter(function () {
          winAction();
          lost = false;
  
        })
      }
  
    })
  
  });
  
  function lostAction(){
    $("div .boundary").addClass("youlose");
    $("#status").text("You Lose! :(");
    $("#end").unbind("mouseover");
  }
  
  function winAction(){
    $("#status").text("You Win! :)");
    $("#status").fadeOut(200);
    $("#status").fadeIn(200);
    $("div .boundary").unbind("mouseover");
    $("#maze").unbind("mouseleave");
    setInterval(winAction,2000);
  }
  