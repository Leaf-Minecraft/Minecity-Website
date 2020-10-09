var ele = document.getElementById("wel")   
var pos = 0;
var id = setInterval(frame, 10);
function frame() {
  if (pos == center) {
    clearInterval(id);
  } else {
    pos++; 
    ele.style.left = pos + 'px'; 
    }
}
