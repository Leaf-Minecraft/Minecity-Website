'use strict'
var ele = document.getElementById("wel")   
var pos = 0;
var center = screen.width/2
var posi
console.log(center)
console.log(screen.width)
var id = setInterval(frame, 2);
function frame() {
    if (pos == center) {
        clearInterval(id);
    }else{
        pos+10;
        posi = pos.concat(px) 
        ele.style.left = posi;
    }
}
frame()