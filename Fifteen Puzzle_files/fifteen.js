
"use strict";
$(document).ready(function () {

    var count = 0;//count variable for left and right position
    var arr = []; //array used for storing the filled position for shuffling
    var empty_space = {};//Object which stores and updates the empty div left and top
    empty_space.leftx = "300px";//initial left 
    empty_space.toppx = "300px";//top positions 


//function for setting the position and css for the filled squares
    $('#puzzlearea div').each(function ()
    {
        
        var occupiedspace = {};
        var x = ((count % 4) * 100);
        var y = (Math.floor(count / 4) * 100);
        $(this).addClass('puzzlepiece');
        var leftpx = x + 'px';
        var toppx = y + 'px';
        occupiedspace.leftpx = leftpx;
        occupiedspace.toppx = toppx;
        arr.push(occupiedspace);
      
        $(this).css({"left": leftpx, "top": toppx, "backgroundImage": "url('images/image.jpg')", "backgroundPosition": -x + 'px ' + (-y) + 'px'});
        count++;
    });

//this function checks if the square can be moved, and swaps the value for emptysquare
    $('.puzzlepiece').click(function ()
    {

        var changedleft = $(this).css("left");
        var changedtop = $(this).css("top");
        if (clickableleft(changedleft, changedtop))
        {
            $(this).css({"left": empty_space.leftx, "top": empty_space.toppx});
            empty_space.leftx = changedleft;
            empty_space.toppx = changedtop;
        } else if (clickableTop(changedleft, changedtop))
        {
            $(this).css({"left": empty_space.leftx, "top": empty_space.toppx});
            empty_space.leftx = changedleft;
            empty_space.toppx = changedtop;

        }

    });

//shuffle algorithm, this changes the index of the divs stored as objects in the array
    $('#shufflebutton').click(function () {

        var i = 0, j = 0,shfl=0, temp = null;

        for (i = arr.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        //setting the css from the shuffled array
        $('#puzzlearea div').each(function ()
        {
            $(this).css({"left": arr[shfl].leftpx, "top": arr[shfl].toppx});
            shfl++;
        });
        shfl = 0;
        //updating to the initial value for the emptydiv
        empty_space.leftx = "300px";
        empty_space.toppx = "300px";
    });

    //on hover function for changing the css and removing the css
    $('.puzzlepiece').hover(function ()
    {

        var changedleft = $(this).css("left");
        var changedtop = $(this).css("top");

        if (clickableleft(changedleft, changedtop))
        {
            $(this).addClass('movablepiece');
        } else if (clickableTop(changedleft, changedtop))
        {
            $(this).addClass('movablepiece');
        }

    }, function ()
    {
        $(this).removeClass('movablepiece');
    });

    //helper function for finding the neighbouring elements on the left
    var clickableleft = function (changedleft, changedtop)
    {
        if (parseInt(changedtop) === parseInt(empty_space.toppx))
        {
            if (parseInt(changedleft) + 100 === parseInt(empty_space.leftx) || parseInt(changedleft) - 100 === parseInt(empty_space.leftx))
            {

                return true;
            } else
            {
                return false;
            }
        }
    };

    //helper function for finding the neighbouring elements on the right
    var clickableTop = function (changedleft, changedtop)
    {
        if (parseInt(changedleft) === parseInt(empty_space.leftx))
        {
            if (parseInt(changedtop) + 100 === parseInt(empty_space.toppx) || parseInt(changedtop) - 100 === parseInt(empty_space.toppx))
            {

                return true;

            } else
            {
                return false;
            }
        }
    };

});