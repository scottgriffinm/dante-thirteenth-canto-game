var iii = 0;
var i1 = 0, i2 = 0, i3 = 0;
var arrayOfStrings = ['Nessus had not yet reached the other side', 'When we moved forward into woods', 'Unmarked by any path.'];
var speed = 50;
var len1 = arrayOfStrings[0].length;
var len2 = arrayOfStrings[1].length;
var len3 = arrayOfStrings[2].length;
var elementId = 'beginningQuote';

  function typeWriter() {
    if (iii < len1) {
      document.getElementById(elementId).innerHTML += arrayOfStrings[0].charAt(i1);
      i1++;
      iii++;
      setTimeout(typeWriter, speed);
    } else if (true) {
      
    }
    
  }

  