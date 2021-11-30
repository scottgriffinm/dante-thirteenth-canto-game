import Typewriter from 'typewriter-effect/dist/core';

var menuQuotes = document.getElementById('menuQuotes');

var typewriter = new Typewriter(menuQuotes, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(100)
  .typeString('Nessus had not yet reached the other side<br>&emsp;When we moved forward into woods <br>&emsp;Unmarked by any path.')
  .start();