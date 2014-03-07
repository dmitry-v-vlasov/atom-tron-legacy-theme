var obj = document.getElementsByClassName("bracket-matcher");
var parent = obj[0].parentElement;
parent.style.background = 'red';

var p = document.getElementsByClassName("overlayer");
p[0].style.zIndex = '-1';

var lines = document.getElementsByClassName("lines");
var divs = document.getElementsByTagName('div');

for(var i = 0; i < divs.length; i++){
  divs[i].onclick = function(e){
    console.log(e.target);
  }
}
