var speed = 100;
var refreshSpeed = 1000;
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var line3 = document.getElementById('line3');

var arrayOfStrings = ['The boughs not smooth, knotted and crooked-forked;', 'No fruit, but poisoned thorns. Of the wild beasts', 'Near Cecina and Corneto, that hate fields worked'];
var len1 = arrayOfStrings[0].length; var len2 = arrayOfStrings[1].length; var len3 = arrayOfStrings[2].length;
var iii = 0;
var i1 = 0, i2 = 0, i3 = 0;

function typeWriter() {
    if (iii < len1) {
      line1.innerHTML += arrayOfStrings[0].charAt(i1);
      i1++;
      iii++;
      setTimeout(typeWriter, speed);
    } 
     else if (iii < (len1+len2)) {
      line2.innerHTML += arrayOfStrings[1].charAt(i2);
      i2++;
      iii++;
      setTimeout(typeWriter, speed);
    } 
     else if (iii < (len1+len2+len3)) {
      line3.innerHTML += arrayOfStrings[2].charAt(i3);
      i3++;
      iii++;
      setTimeout(typeWriter, speed);
    }
    if ((line1.innerHTML + line2.innerHTML + line3.innerHTML) == ('The boughs not smooth, knotted and crooked-forked;No fruit, but poisoned thorns. Of the wild beastsNear Cecina and Corneto, that hate fields worked')) {
      line1.innerHTML = ""; line2.innerHTML = ""; line3.innerHTML = "";
      arrayOfStrings = ['By men with plough and barrow, none infests','Thickets that are as rough or dense as this.','Here the repellent Harpies make their nests,'];
      len1 = arrayOfStrings[0].length; len2 = arrayOfStrings[1].length; len3 = arrayOfStrings[2].length;
      iii = 0;
      i1 = 0, i2 = 0, i3 = 0;
      setTimeout(typeWriter, refreshSpeed);
    }
  }


typeWriter()


