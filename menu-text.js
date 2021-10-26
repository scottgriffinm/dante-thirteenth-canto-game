var i = 0;
var txt = 'Nessus had not yet reached the other side when we moved forward into woods unmarked by any path.';

var speed = 50;



  function typeWriter(txt, elementId) {
    if (i < txt.length) {
      document.getElementById(elementId).innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

typeWriter()
