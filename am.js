'use strict'
var ele = document.getElementById("wel")   
var pos = 0;
var center = screen.width/2
var id = setInterval(frame, 2);
function frame() {
    if (pos == center) {
        clearInterval(id);
    }else{
        pos++; 
        ele.style.left = pos + 'px'; 
    }
}
frame()