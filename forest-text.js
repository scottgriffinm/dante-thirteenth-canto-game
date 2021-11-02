var speed = 50;
var elementId1 = 'line1';
var elementId2 = 'line2';
var elementId3 = 'line3';

var iii = 0;
var i1 = 0, i2 = 0, i3 = 0;

var stringArray = ['The boughs not smooth, knotted and crooked-forked;', 'No fruit, but poisoned thorns. Of the wild beasts', 'Near Cecina and Corneto, that hate fields worked'];
var len1 = stringArray[0].length;
var len2 = stringArray[1].length;
var len3 = stringArray[2].length;


  function typeWriter(arrayOfStrings) {
    
    if (iii < len1) {
      document.getElementById(elementId1).innerHTML += arrayOfStrings[0].charAt(i1);
      i1++;
      iii++;
      setTimeout(typeWriter, speed);
    } 
     else if (iii < (len1+len2)) {
      document.getElementById(elementId2).innerHTML += arrayOfStrings[1].charAt(i2);
      i2++;
      iii++;
      setTimeout(typeWriter, speed);
    } 
     else if (iii < (len1+len2+len3)) {
      document.getElementById(elementId3).innerHTML += arrayOfStrings[2].charAt(i3);
      i3++;
      iii++;
      setTimeout(typeWriter, speed);
    }
    if (iii == (len1+len2+len3)) {
      iii++;
      return 'im done now';
    }
    
  }






if (typeWriter(stringArray) == 'im done now') {
  
  iii = 0; 
  i1 = 0; i2 = 0; i3 = 0;
  var stringArray2 = ['By men with plough and barrow, none infests','Thickets that are as rough or dense as this.','Here the repellent Harpies make their nests,'];
  len1 = stringArray2[0].length;
  len2 = stringArray2[1].length;
  len3 = stringArray2[2].length;
  document.getElementById(elementId1).innerHTML = '';
  document.getElementById(elementId2).innerHTML = '';
  document.getElementById(elementId3).innerHTML = '';
  
  if (typeWriter(stringArray2) == 'im done now') {
  
    iii = 0; 
    i1 = 0; i2 = 0; i3 = 0;
    var stringArray3 = ['Who drove the Trojans from the Strophades','With dire announcements of the coming woe.','They have broad wings, a human neck and face,'];
    len1 = stringArray2[0].length;
    len2 = stringArray2[1].length;
    len3 = stringArray2[2].length;
    document.getElementById(elementId1).innerHTML = '';
    document.getElementById(elementId2).innerHTML = '';
    document.getElementById(elementId3).innerHTML = '';
    
    typeWriter(stringArray3)
  }

}
  

















