var i = 0;
var txt = 'Nessus had not yet reached the other side when we moved forward into woods unmarked by any path.';

var speed = 50;



  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("beginningQuote").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

typeWriter()
