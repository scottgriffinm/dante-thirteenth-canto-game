import Typewriter from 'typewriter-effect';

var menuQuotes = document.getElementById('menuQuotes');

var typewriter = new Typewriter(menuQuotes, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString('Nessus had not yet reached the other side<br>&emsp;When we moved forward into woods <br>&emsp;Unmarked by any path.')
  .start();