function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

document.ready = function () {

  var matcher = document.getElementsByClassName("bracket-matcher");

  var divs = document.getElementsByTagName('div');

  for(var i = 0; i < divs.length; i++) {
    divs[i].onclick = function(e) {

      if(typeof matcher[0] != 'undefined') {
        if(hasClass(matcher[0].nextSibling, 'bracket-matcher')) {
          var el = document.createElement("div");
          el.className = 'bracket-matcher-line';

          el.style.position = 'relative';
          el.style.display = 'block';
          el.style.width = '7px';
          el.style.borderRight = 'dotted 1px';

          insertAfter(matcher[0], el);
        }
      }

      var matcherLine = document.getElementsByClassName("bracket-matcher-line");

      matcherLine = matcherLine[0];
      if( parseInt(matcher[1].style.top) - parseInt(matcher[0].style.top) != 0 ) {
        matcherLine.style.display = 'block';
        matcherLine.style.height = (parseInt(matcher[1].style.top) - parseInt(matcher[0].style.top) - 15) + 'px';
        matcherLine.style.top = (parseInt(matcher[0].style.top) + 15) + 'px';
        matcherLine.style.left = (parseInt(matcher[1].style.left) - 3) + 'px';
      } else {
        matcherLine.style.display = 'none';
      }

    }
  }

}
