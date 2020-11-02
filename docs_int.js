var link = document.createElement('link');  
link.rel = 'stylesheet';        
link.type = 'text/css'; 
link.href = 'docs.css';  
document.getElementsByTagName('HEAD')[0].appendChild(link);

var button = document.createElement("button");
button.innerHTML = "";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
  window.open("require.html","_self")
});