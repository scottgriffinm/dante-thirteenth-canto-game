window.onload = function() {
  window.setTimeout(fadein,
                   20000); //20 seconds - TIME UP WITH TEXT GIF WHEN READY
}

function fadein() {
  document.getElementById('underText').style.opacity = '1';
}