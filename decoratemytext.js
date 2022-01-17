
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
            document.getElementById("textarea").style.fontStyle="Italic";
    
        } else {
            document.getElementById("textarea").style.fontStyle="normal";
            document.body.style.backgroundImage = "";
    
        }


    }
function wordfind() {
        var words = document.getElementById("textarea").value;
        var separated = words.split(/\s+/);
        var result = "";
        for (var i = 0; i < separated.length; i++) {
            if (separated[i].charAt(0).match("[aeoiuAEOIU]")) {
                changed = separated[i] + "ay";
            } else {
                var word = separated[i];
                for (var j = 0; j < word.length; j++) {
                    if (word[j].match("[aeoiuAEOIU]")) {
                        var changed = word.substring(j) + word.substring(0, j) + "ay";
                        break;
                    }
    
                }
            }
            result += changed + " ";
    
        }
        document.getElementById("textarea").value = result;
    
    }
function overfive() {
        var words = document.getElementById("textarea").value;
        var a = words.split(/\s+/);
        var result = "";
        for (let i = 0; i < a.length; i++) {
            if (a[i].length >= 5) {
                a[i] = "Malkovich";
            }
            result += a[i] + " ";
        }
        document.getElementById("textarea").value = result;
    }

