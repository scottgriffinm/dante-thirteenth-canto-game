var iii = 0;
var i1 = 0, i2 = 0, i3 = 0;
var arrayOfStrings = ['Nessus had not yet reached the other side', 'When we moved forward into woods', 'Unmarked by any path.'];
var speed = 100;
var len1 = arrayOfStrings[0].length;
var len2 = arrayOfStrings[1].length;
var len3 = arrayOfStrings[2].length;
var elementId1 = 'line1';
var elementId2 = 'line2';
var elementId3 = 'line3';


  function typeWriter() {
    if (iii < len1) {
      document.getElementById(elementId1).innerHTML += arrayOfStrings[0].charAt(i1);
      i1++;
      iii++;
      setTimeout(typeWriter, speed);
    } 
     else if (iii < (len1+len2)) {
      document.getElementById(elementId2).innerHTML += arrayOfStrings[1].charAt(i2);
      i2++;
      iii++;
      setTimeout(typeWriter, speed);
    } 
     else if (iii < (len1+len2+len3)) {
      document.getElementById(elementId3).innerHTML += arrayOfStrings[2].charAt(i3);
      i3++;
      iii++;
      setTimeout(typeWriter, speed);
    }
    
  }


  typeWriter()