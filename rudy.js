
 var rudyTimer = (function(){
  timer = null; // stores ID of interval timer 
  function delayMsg2() {
     if (timer === null) {
         timer = setInterval(rudy, 1000);
     } else {
          clearInterval(timer); 
          timer = null;
        }  
      }
  function rudy() { // called each time the timer goes off
      document.getElementById("demo").innerHTML+="Rudy!";
    }

            //delayMessage: function(){//
            return function(){
                      delayMsg2();
                 }
                
            
})();






