
function hello() {
 alert("Hello World");
}
function interval(){
    var id = setInterval(enlargeText,1000);
    setTimeout(clearInterval, 5000, id);
}
function enlargeText(){
    var text1 = window.getComputedStyle(document.getElementById("textarea")).fontSize;
    newtext1 = parseInt(text1) + 2 + "pt";
    document.getElementById("textarea").style.fontSize = newtext1;
}
function mynewStyle(){
        if (document.getElementById("bling").checked == true) {
            document.body.style.backgroundImage="url('./dollar.jpg')"; 
            document.getElementById("textarea").innerHTML="Welcome";
            document.getElementById("textarea").style.color="blue";
            document.getElementById("textarea").style.fontStyle="Italic";
    
        } else {
            document.getElementById("textarea").style.fontStyle="normal";
            document.getElementById("textarea").innerHTML="Tap your text here...";
            document.getElementById("textarea").style.color="black";
            document.body.style.backgroundImage = "";
    
        }


    }
