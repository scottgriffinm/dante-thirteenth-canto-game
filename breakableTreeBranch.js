
window.onload = function(){ 
  var branch  = document.getElementById("treeHole");
  branch.onclick = function() {mouseDown()};
  branch.onmouseover = function() {mouseOver()};
  branch.onmouseout = function() {mouseOut()};
  function mouseOver() {
    branch.opacity = 0.5;
  }

  function mouseOut() {
    branch.opacity = 0;
  }

  function mouseDown() {
    document.getElementById("treeImage").src = "https://cdn.glitch.me/043378ab-3600-4494-be86-3cd6d7062f17%2Fbrokentree%20with%20dante%20and%20virgil.png?v=1638673441822";
    branch.remove(); 
  }


};

