var i = 0;
var stringArray = ['Nessus had not yet reached the other side', 'When we moved forward into woods', 'Unmarked by any path.'];
var arrayLength = stringArray.length;

var speed = 50;



  function typeWriter(txt, elementId) {
    if (i < txt.length) {
      document.getElementById(elementId).innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter(txt,elementId), speed);
    }
  }

for (var iii = 0; iii < arrayLength; iii++) {
    typeWriter(stringArray[iii], 'beginningQuote');
  
}
  