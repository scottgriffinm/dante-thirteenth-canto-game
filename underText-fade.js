window.onload = function() {
  window.setTimeout(fadein,
                   5000); //5 seconds - TIME UP WITH TEXT GIF WHEN READY
}

function fadein() {
  document.getElementById('underText').style.opacity = '1';
}