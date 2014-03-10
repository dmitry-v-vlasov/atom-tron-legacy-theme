var obj = document.getElementsByClassName("bracket-matcher");
var parent = obj[0].parentElement;

var p = document.getElementsByClassName("overlayer");
p[0].style.zIndex = '-1';

var lines = document.getElementsByClassName("lines");
var divs = document.getElementsByTagName('div');

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

for(var i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {

    if(typeof obj[0].style != 'undefined') {
      if(hasClass(obj[0].nextSibling, 'bracket-matcher')) {
        var el = document.createElement("div");
        el.className = 'bracket-matcher-line';

        el.style.position = 'relative';
        el.style.display = 'block';
        el.style.width = '7px';
        el.style.borderRight = 'dotted 1px';

        insertAfter(obj[0], el);
      }
    }

    var matcherLine = document.getElementsByClassName("bracket-matcher-line");
    console.log(obj);
    matcherLine = matcherLine[0];
    if( parseInt(obj[1].style.top) - parseInt(obj[0].style.top) != 0 ) {
      matcherLine.style.display = 'block';
      matcherLine.style.height = (parseInt(obj[1].style.top) - parseInt(obj[0].style.top) - 15) + 'px';
    } else {
      matcherLine.style.display = 'none';
    }
    console.log(obj[0].style.top);console.log(obj[1].style.top);
    matcherLine.style.top = (parseInt(obj[0].style.top) + 15) + 'px';
    matcherLine.style.left = (parseInt(obj[1].style.left) - 3) + 'px';
  }
}
