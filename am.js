'use strict';
var ele = document.getElementById("we");   
var pos;
var center = (parseFloat(window.width))/2;
var posi;
console.log(center);
console.log(window.width);

while (pos <= center) {
    pos+1;
    posi=pos+px; 
    ele.style.left = posi;
    await(0.01);
}