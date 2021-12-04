let branch  = document.getElementById("treeHole");

branch.onmouseover = function() {mouseOver()};
branch.onmouseout = function() {mouseOut()};


function mouseOver() {
  branch.opacity = "red";
}

function mouseOut() {
  document.getElementById("demo").style.color = "black";
}






branch.onmousedown = function(event) {
      document.getElementById("treeImage").src = "https://cdn.glitch.me/043378ab-3600-4494-be86-3cd6d7062f17%2Fbrokentree%20with%20dante%20and%20virgil.png?v=1638588909585";
      branch.remove(); 
    }
