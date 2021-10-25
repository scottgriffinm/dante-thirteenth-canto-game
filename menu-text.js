var i = 0;
var txt = 'Nessus had not yet reached the other side\n  When we moved forward into woods unmarked\n  By any path.';
var txt1 = 'Nessus had not yet reached the other side';
var txt2 = '  When we moved forward into woods unmarked';
var txt3 = '  By any path.'
var speed = 50;

function newTypeWriter() {
  for (let iii=0; iii < txt1.length; i++) {
    document.getElementById("beginningQuote").innerHTML += txt1.charAt(i);
    setTimeout(newTypeWriter, speed);
  }
  
  document.getElementById("beginningQuote").innerHTML += '\n';
  
  for (let iii=0; iii < txt2.length; i++) {
    document.getElementById("beginningQuote").innerHTML += txt2.charAt(i);
    setTimeout(newTypeWriter, speed);
  }
  
  document.getElementById("beginningQuote").innerHTML += '\n';
  
  for (let iii=0; iii < txt3.length; i++) {
    document.getElementById("beginningQuote").innerHTML += txt3.charAt(i);
    setTimeout(newTypeWriter, speed);
  }
}


  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("beginningQuote").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

newTypeWriter()