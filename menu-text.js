var i = 0;
var stringArray = ['Nessus had not yet reached the other side', 'When we moved forward into woods', 'Unmarked by any path.'];
var speed = 50;



  function typeWriter(tx, elementId) {
    if (i < txt.length) {
      document.getElementById(elementId).innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter(txt,elementId), speed);
    }
  }

  