var displayTime = 10;
var waitTime = 1;


window.onload = function() {
  window.setTimeout(fadeinForest,
                   1); //1 second wait
}


function fadeinForest() {
  // first action
  if ((document.getElementById("forestQuotes").innerText == 'The leaves not green, earth-hued;') && (document.getElementById("forestQuotes").style.opacity == '')){
    document.getElementById("forestQuotes").style.opacity = '1';
    setTimeout(function() {fadeinForest}, displayTime)
  } 
  
  else if ((document.getElementById("forestQuotes").innerText == 'The leaves not green, earth-hued;') && (document.getElementById("forestQuotes").style.opacity == '1')){
    document.getElementById("forestQuotes").style.opacity = '0';
    setTimeout(function() {fadeinForest}, waitTime)
  }
    
  
}

/*
window.onload = function() {
  window.setTimeout(fadein,
                   1); //1 second
}

function fadein() {
  document.getElementById('menuQuotes').style.opacity = '1';
}


        <div id="forestQuotes1" style="position:absolute;">
            The leaves not green, earth-hued;
        </div>
        <div id="forestQuotes2" style="position:absolute;">
            The boughs not smooth, knotted and crooked-forked;<br>&emsp;No fruit, but poisoned thorns. Of the wild beasts
          <br>&emsp;Near Cecina and Corneto, that hate fields worked
        </div>
        <div id="forestQuotes3" style="position:absolute;">
          By men with plough and harrow, none infests<br>&emsp;Thickets that are as rough or dense as this.
          <br>&emsp;Here the repellent Harpies make their nests,
        </div>
        <div id="forestQuotes4" style="position:absolute;">
          Who drove the Trojans from the Strophades<br>&emsp;With dire announcements of the coming woe.
          <br>&emsp;They have broad wings, a human neck and face,
        </div>
        <div id="forestQuotes5" style="position:absolute;">
          Clawed feet, and swollen, feathered bellies; they caw<br>&emsp;Their lamentations in the eerie trees.
        </div>
        <div id="forestQuotes6" style="position:absolute;">
          &emsp;On every side, I heard wailing voices grieve,<br>&emsp;Yet I could not see anyone there to wail,
        </div>
        */