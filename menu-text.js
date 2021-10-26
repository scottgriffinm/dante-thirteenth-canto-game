var i = 0;
var stringArray = ['Nessus had not yet reached the other side', 'When we moved forward into woods', 'Unmarked by any path.' ];

var speed = 50;

<!-- Function takes a list of strings (poem lines) and an element id,
    typewrites them one at a time --> 

  function typeWriter(txt, elementId) {
    if (i < txt.length) {
      document.getElementById(elementId).innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

typeWriter()
