var i = 0;
var txt = 'Nessus had not yet reached the other side\n  When we moved forwar';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}