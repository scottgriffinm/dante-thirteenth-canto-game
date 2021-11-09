window.onload = function() {
  window.setTimeout(fadeout,
                   8000); //8 seconds
}

function fadeout() {
  document.getElementById('menuQuotes').style.opacity = '0';
}