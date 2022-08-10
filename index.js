var initialWidth = 0;
var hoursLogged = 0;
function move() {
    var elem = document.getElementById("myBar");   
    var width = initialWidth;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= initialWidth + 8) {
        initialWidth = width;
        clearInterval(id);
        
      } else {
        width++; 
        elem.style.width = width + '%'; 
        if (width ==8){
            hoursLogged = 1;
        }else if (width==16){
            hoursLogged = 2;
        }else if (width==24){
            hoursLogged = 3;
        }else if (width==32){
            hoursLogged = 4;
        }else if (width==40){
            hoursLogged = 5;
        }else if (width==48){
            hoursLogged = 6;
        }else if (width ==56){
            hoursLogged = 7;
        }else if (width == 64){
            hoursLogged = 8;
        }else if (width==72){
            hoursLogged = 9;
        }else if (width==80){
            hoursLogged = 10;
        }else if (width==88){
            hoursLogged = 11;
        }else if (width==96){
            width = 100;
            elem.style.width = width + '%'; 
            hoursLogged = 12;
        }else if (width>96){
            hoursLogged = "12+";
        }
        document.getElementById("demo").innerHTML = hoursLogged  + ' hours logged';
        if (hoursLogged >= 6){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership!</div>';
        }
        if (hoursLogged >= 12 || hoursLogged == "12+"){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership and digging rights to build a complete bike!</div>';
        }
      }
    }
  }
  function move2() {
    var elem = document.getElementById("myBar");   
    var width = initialWidth;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= initialWidth + 16) {
        initialWidth = width;
        clearInterval(id);
        
      } else {
        width++; 
        elem.style.width = width + '%'; 
        if (width ==8){
            hoursLogged = 1;
        }else if (width==16){
            hoursLogged = 2;
        }else if (width==24){
            hoursLogged = 3;
        }else if (width==32){
            hoursLogged = 4;
        }else if (width==40){
            hoursLogged = 5;
        }else if (width==48){
            hoursLogged = 6;
        }else if (width ==56){
            hoursLogged = 7;
        }else if (width == 64){
            hoursLogged = 8;
        }else if (width==72){
            hoursLogged = 9;
        }else if (width==80){
            hoursLogged = 10;
        }else if (width==88){
            hoursLogged = 11;
        }else if (width==96){
            width = 100;
            elem.style.width = width + '%'; 
            hoursLogged = 12;
        }else if (width>96){
            hoursLogged = "12+";
        }
        document.getElementById("demo").innerHTML = hoursLogged  + ' hours logged';
        if (hoursLogged >= 6){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership!</div>';
        }
        if (hoursLogged >= 12|| hoursLogged == "12+"){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership and digging rights to build a complete bike!</div>';
        }
      }
    }
  }
  function move3() {
    var elem = document.getElementById("myBar");   
    var width = initialWidth;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= initialWidth + 24) {
        initialWidth = width;
        clearInterval(id);
        
      } else {
        width++; 
        elem.style.width = width + '%'; 
        if (width ==8){
            hoursLogged = 1;
        }else if (width==16){
            hoursLogged = 2;
        }else if (width==24){
            hoursLogged = 3;
        }else if (width==32){
            hoursLogged = 4;
        }else if (width==40){
            hoursLogged = 5;
        }else if (width==48){
            hoursLogged = 6;
        }else if (width ==56){
            hoursLogged = 7;
        }else if (width == 64){
            hoursLogged = 8;
        }else if (width==72){
            hoursLogged = 9;
        }else if (width==80){
            hoursLogged = 10;
        }else if (width==88){
            hoursLogged = 11;
        }else if (width==96){
            width = 100;
            elem.style.width = width + '%'; 
            hoursLogged = 12;
        }else if (width>96){
            hoursLogged = "12+";
        }
        document.getElementById("demo").innerHTML = hoursLogged  + ' hours logged';
        if (hoursLogged >= 6){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership!</div>';
        }
        if (hoursLogged >= 12|| hoursLogged == "12+"){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership and digging rights to build a complete bike!</div>';
        }
      }
    }
  }
  function move4() {
    var elem = document.getElementById("myBar");   
    var width = initialWidth;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= initialWidth + 32) {
        initialWidth = width;
        clearInterval(id);
        
      } else {
        width++; 
        elem.style.width = width + '%'; 
        if (width ==8){
            hoursLogged = 1;
        }else if (width==16){
            hoursLogged = 2;
        }else if (width==24){
            hoursLogged = 3;
        }else if (width==32){
            hoursLogged = 4;
        }else if (width==40){
            hoursLogged = 5;
        }else if (width==48){
            hoursLogged = 6;
        }else if (width ==56){
            hoursLogged = 7;
        }else if (width == 64){
            hoursLogged = 8;
        }else if (width==72){
            hoursLogged = 9;
        }else if (width==80){
            hoursLogged = 10;
        }else if (width==88){
            hoursLogged = 11;
        }else if (width==96){
            width = 100;
            elem.style.width = width + '%'; 
            hoursLogged = 12;
        }else if (width>96){
            hoursLogged = "12+";
        }
        document.getElementById("demo").innerHTML = hoursLogged  + ' hours logged';
        if (hoursLogged >= 6){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership!</div>';
        }
        if (hoursLogged >= 12|| hoursLogged == "12+"){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership and digging rights to build a complete bike!</div>';
        }
      }
    }
  }
  function move5() {
    var elem = document.getElementById("myBar");   
    var width = initialWidth;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= initialWidth + 40) {
        initialWidth = width;
        clearInterval(id);
        
      } else {
        width++; 
        elem.style.width = width + '%'; 
        if (width ==8){
            hoursLogged = 1;
        }else if (width==16){
            hoursLogged = 2;
        }else if (width==24){
            hoursLogged = 3;
        }else if (width==32){
            hoursLogged = 4;
        }else if (width==40){
            hoursLogged = 5;
        }else if (width==48){
            hoursLogged = 6;
        }else if (width ==56){
            hoursLogged = 7;
        }else if (width == 64){
            hoursLogged = 8;
        }else if (width==72){
            hoursLogged = 9;
        }else if (width==80){
            hoursLogged = 10;
        }else if (width==88){
            hoursLogged = 11;
        }else if (width==96){
            width = 100;
            elem.style.width = width + '%'; 
            hoursLogged = 12;
        }else if (width>96){
            hoursLogged = "12+";
        }
        document.getElementById("demo").innerHTML = hoursLogged  + ' hours logged';
        if (hoursLogged >= 6){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership!</div>';
        }
        if (hoursLogged >= 12|| hoursLogged == "12+"){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership and digging rights to build a complete bike!</div>';
        }
      }
    }
  }
  function move6() {
    var elem = document.getElementById("myBar");   
    var width = initialWidth;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= initialWidth + 48) {
        initialWidth = width;
        clearInterval(id);
        
      } else {
        width++; 
        elem.style.width = width + '%'; 
        if (width ==8){
            hoursLogged = 1;
        }else if (width==16){
            hoursLogged = 2;
        }else if (width==24){
            hoursLogged = 3;
        }else if (width==32){
            hoursLogged = 4;
        }else if (width==40){
            hoursLogged = 5;
        }else if (width==48){
            hoursLogged = 6;
        }else if (width ==56){
            hoursLogged = 7;
        }else if (width == 64){
            hoursLogged = 8;
        }else if (width==72){
            hoursLogged = 9;
        }else if (width==80){
            hoursLogged = 10;
        }else if (width==88){
            hoursLogged = 11;
        }else if (width==96){
            width = 100;
            elem.style.width = width + '%'; 
            hoursLogged = 12;
        }else if (width>96){
            hoursLogged = "12+";
        }
        document.getElementById("demo").innerHTML = hoursLogged  + ' hours logged';
        if (hoursLogged >= 6){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership!</div>';
        }
        if (hoursLogged >= 12|| hoursLogged == "12+"){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership and digging rights to build a complete bike!</div>';
        }
      }
    }
  }
  function move7() {
    var elem = document.getElementById("myBar");   
    var width = initialWidth;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= initialWidth + 56) {
        initialWidth = width;
        clearInterval(id);
        
      } else {
        width++; 
        elem.style.width = width + '%'; 
        if (width ==8){
            hoursLogged = 1;
        }else if (width==16){
            hoursLogged = 2;
        }else if (width==24){
            hoursLogged = 3;
        }else if (width==32){
            hoursLogged = 4;
        }else if (width==40){
            hoursLogged = 5;
        }else if (width==48){
            hoursLogged = 6;
        }else if (width ==56){
            hoursLogged = 7;
        }else if (width == 64){
            hoursLogged = 8;
        }else if (width==72){
            hoursLogged = 9;
        }else if (width==80){
            hoursLogged = 10;
        }else if (width==88){
            hoursLogged = 11;
        }else if (width==96){
            width = 100;
            elem.style.width = width + '%'; 
            hoursLogged = 12;
        }else if (width>96){
            hoursLogged = "12+";
        }
        document.getElementById("demo").innerHTML = hoursLogged  + ' hours logged';
        if (hoursLogged >= 6){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership!</div>';
        }
        if (hoursLogged >= 12|| hoursLogged == "12+"){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership and digging rights to build a complete bike!</div>';
        }
      }
    }
  }
  function move8() {
    var elem = document.getElementById("myBar");   
    var width = initialWidth;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= initialWidth + 64) {
        initialWidth = width;
        clearInterval(id);
        
      } else {
        width++; 
        elem.style.width = width + '%'; 
        if (width ==8){
            hoursLogged = 1;
        }else if (width==16){
            hoursLogged = 2;
        }else if (width==24){
            hoursLogged = 3;
        }else if (width==32){
            hoursLogged = 4;
        }else if (width==40){
            hoursLogged = 5;
        }else if (width==48){
            hoursLogged = 6;
        }else if (width ==56){
            hoursLogged = 7;
        }else if (width == 64){
            hoursLogged = 8;
        }else if (width==72){
            hoursLogged = 9;
        }else if (width==80){
            hoursLogged = 10;
        }else if (width==88){
            hoursLogged = 11;
        }else if (width==96){
            width = 100;
            elem.style.width = width + '%'; 
            hoursLogged = 12;
        }else if (width>96){
            hoursLogged = "12+";
        }
        document.getElementById("demo").innerHTML = hoursLogged  + ' hours logged';
        if (hoursLogged >= 6){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership!</div>';
        }
        if (hoursLogged >= 12|| hoursLogged == "12+"){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership and digging rights to build a complete bike!</div>';
        }
      }
    }
  }
  function move9() {
    var elem = document.getElementById("myBar");   
    var width = initialWidth;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= initialWidth + 72) {
        initialWidth = width;
        clearInterval(id);
        
      } else {
        width++; 
        elem.style.width = width + '%'; 
        if (width ==8){
            hoursLogged = 1;
        }else if (width==16){
            hoursLogged = 2;
        }else if (width==24){
            hoursLogged = 3;
        }else if (width==32){
            hoursLogged = 4;
        }else if (width==40){
            hoursLogged = 5;
        }else if (width==48){
            hoursLogged = 6;
        }else if (width ==56){
            hoursLogged = 7;
        }else if (width == 64){
            hoursLogged = 8;
        }else if (width==72){
            hoursLogged = 9;
        }else if (width==80){
            hoursLogged = 10;
        }else if (width==88){
            hoursLogged = 11;
        }else if (width==96){
            width = 100;
            elem.style.width = width + '%'; 
            hoursLogged = 12;
        }else if (width>96){
            hoursLogged = "12+";
        }
        document.getElementById("demo").innerHTML = hoursLogged  + ' hours logged';
        if (hoursLogged >= 6){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership!</div>';
        }
        if (hoursLogged >= 12|| hoursLogged == "12+"){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership and digging rights to build a complete bike!</div>';
        }
      }
    }
  }
  function move10() {
    var elem = document.getElementById("myBar");   
    var width = initialWidth;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= initialWidth + 80) {
        initialWidth = width;
        clearInterval(id);
        
      } else {
        width++; 
        elem.style.width = width + '%'; 
        if (width ==8){
            hoursLogged = 1;
        }else if (width==16){
            hoursLogged = 2;
        }else if (width==24){
            hoursLogged = 3;
        }else if (width==32){
            hoursLogged = 4;
        }else if (width==40){
            hoursLogged = 5;
        }else if (width==48){
            hoursLogged = 6;
        }else if (width ==56){
            hoursLogged = 7;
        }else if (width == 64){
            hoursLogged = 8;
        }else if (width==72){
            hoursLogged = 9;
        }else if (width==80){
            hoursLogged = 10;
        }else if (width==88){
            hoursLogged = 11;
        }else if (width==96){
            width = 100;
            elem.style.width = width + '%'; 
            hoursLogged = 12;
        }else if (width>96){
            hoursLogged = "12+";
        }
        document.getElementById("demo").innerHTML = hoursLogged  + ' hours logged';
        if (hoursLogged >= 6){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership!</div>';
        }
        if (hoursLogged >= 12|| hoursLogged == "12+"){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership and digging rights to build a complete bike!</div>';
        }
      }
    }
  }
  function move11() {
    var elem = document.getElementById("myBar");   
    var width = initialWidth;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= initialWidth + 88) {
        initialWidth = width;
        clearInterval(id);
        
      } else {
        width++; 
        elem.style.width = width + '%'; 
        if (width ==8){
            hoursLogged = 1;
        }else if (width==16){
            hoursLogged = 2;
        }else if (width==24){
            hoursLogged = 3;
        }else if (width==32){
            hoursLogged = 4;
        }else if (width==40){
            hoursLogged = 5;
        }else if (width==48){
            hoursLogged = 6;
        }else if (width ==56){
            hoursLogged = 7;
        }else if (width == 64){
            hoursLogged = 8;
        }else if (width==72){
            hoursLogged = 9;
        }else if (width==80){
            hoursLogged = 10;
        }else if (width==88){
            hoursLogged = 11;
        }else if (width==96){
            width = 100;
            elem.style.width = width + '%'; 
            hoursLogged = 12;
        }else if (width>96){
            hoursLogged = "12+";
        }
        document.getElementById("demo").innerHTML = hoursLogged  + ' hours logged';
        if (hoursLogged >= 6){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership!</div>';
        }
        if (hoursLogged >= 12|| hoursLogged == "12+"){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership and digging rights to build a complete bike!</div>';
        }
      }
    }
  }
  function move12() {
    var elem = document.getElementById("myBar");   
    var width = initialWidth;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= initialWidth + 96) {
        initialWidth = width;
        clearInterval(id);
        
      } else {
        width++; 
        elem.style.width = width + '%'; 
        if (width ==8){
            hoursLogged = 1;
        }else if (width==16){
            hoursLogged = 2;
        }else if (width==24){
            hoursLogged = 3;
        }else if (width==32){
            hoursLogged = 4;
        }else if (width==40){
            hoursLogged = 5;
        }else if (width==48){
            hoursLogged = 6;
        }else if (width ==56){
            hoursLogged = 7;
        }else if (width == 64){
            hoursLogged = 8;
        }else if (width==72){
            hoursLogged = 9;
        }else if (width==80){
            hoursLogged = 10;
        }else if (width==88){
            hoursLogged = 11;
        }else if (width==96){
            width = 100;
            elem.style.width = width + '%'; 
            hoursLogged = 12;
        }else if (width>96){
            hoursLogged = "12+";
        }
        document.getElementById("demo").innerHTML = hoursLogged  + ' hours logged';
        if (hoursLogged >= 6){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership!</div>';
        }
        if (hoursLogged >= 12|| hoursLogged == "12+"){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership and digging rights to build a complete bike!</div>';
        }
      }
    }
  }
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  
  function move13(){
    var elem = document.getElementById("myBar");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width=width) {
        width = 0;
        elem.style.width = width + '%'; 
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        initialWidth = 0;
        hoursLogged = 0;
        if (width ==8){
            hoursLogged = 1;
        }else if (width==16){
            hoursLogged = 2;
        }else if (width==24){
            hoursLogged = 3;
        }else if (width==32){
            hoursLogged = 4;
        }else if (width==40){
            hoursLogged = 5;
        }else if (width==48){
            hoursLogged = 6;
        }else if (width ==56){
            hoursLogged = 7;
        }else if (width == 64){
            hoursLogged = 8;
        }else if (width==72){
            hoursLogged = 9;
        }else if (width==80){
            hoursLogged = 10;
        }else if (width==88){
            hoursLogged = 11;
        }else if (width==96){
            width = 100;
            elem.style.width = width + '%'; 
            hoursLogged = 12;
        }
        document.getElementById("demo").innerHTML = hoursLogged  + ' hours logged';
        if (hoursLogged >= 6){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership!</div>';
        }
        if (hoursLogged >= 12|| hoursLogged == "12+"){
            document.getElementById("demo").innerHTML = hoursLogged + ' hours logged <br> <div class = "big">Congratulations, you have earned a one-year membership and digging rights to build a complete bike!</div>';
        }

    }
    }
  }



var button3 = document.getElementById("clickme3"),
count3 = 0;
button3.onclick = function() {
    let text = "Are you sure you want to indicate interest? You would be signing up on Thursday, 8/11, for the 6-9pm shift.";
    if (confirm(text) == true && count3 == 0) {
      count3 += 1;
      button3.innerHTML = "👍: " + count3;
    } 
};

var button5 = document.getElementById("clickme5"),
count5 = 0;
button5.onclick = function() {
    let text = "Are you sure you want to indicate interest? You would be signing up on Saturday, 8/13, for the 12-3pm shift.";
    if (confirm(text) == true && count5 == 0) {
      count5 += 1;
      button5.innerHTML = "👍: " + count5;
    } 
};


var button8 = document.getElementById("clickme8"),
count8 = 0;
button8.onclick = function() {
    let text = "Are you sure you want to indicate interest? You would be signing up on Tuesday, 8/16, for the 6-9pm shift.";
    if (confirm(text) == true && count8 == 0) {
      count8 += 1;
      button8.innerHTML = "👍: " + count8;
    } 
};
var button9 = document.getElementById("clickme9"),
count9 = 0;
button9.onclick = function() {
    let text = "Are you sure you want to indicate interest? You would be signing up on Wednesday, 8/17, for the 6-9pm shift.";
    if (confirm(text) == true && count9 == 0) {
      count9 += 1;
      button9.innerHTML = "👍: " + count9;
    } 
};
var button10 = document.getElementById("clickme10"),
count10 = 0;
button10.onclick = function() {
    let text = "Are you sure you want to indicate interest? You would be signing up on Thursday, 8/18, for the 6-9pm shift.";
    if (confirm(text) == true && count10 == 0) {
      count10 += 1;
      button10.innerHTML = "👍: " + count10;
    } 
};

var button12 = document.getElementById("clickme12"),
count12 = 0;
button12.onclick = function() {
    let text = "Are you sure you want to indicate interest? You would be signing up on Saturday, 8/20, for the 12-3pm shift.";
    if (confirm(text) == true && count12 == 0) {
      count12 += 1;
      button12.innerHTML = "👍: " + count12;
    } 
};

var button14 = document.getElementById("clickme14"),
count14 = 0;
button14.onclick = function() {
    let text = "Are you sure you want to indicate interest? You would be signing up on Monday (WTF Night), 8/22, for the 6:30-9pm shift.";
    if (confirm(text) == true && count14 == 0) {
      count14 += 1;
      button14.innerHTML = "👍: " + count14;
    } 
};
var button15 = document.getElementById("clickme15"),
count15 = 0;
button15.onclick = function() {
    let text = "Are you sure you want to indicate interest? You would be signing up on Tuesday, 8/23, for the 6-9pm shift.";
    if (confirm(text) == true && count15 == 0) {
      count15 += 1;
      button15.innerHTML = "👍: " + count15;
    } 
};
var button16 = document.getElementById("clickme16"),
count16 = 0;
button16.onclick = function() {
    let text = "Are you sure you want to indicate interest? You would be signing up on Wednesday, 8/24, for the 6-9pm shift.";
    if (confirm(text) == true && count16 == 0) {
      count16 += 1;
      button16.innerHTML = "👍: " + count16;
    } 
};
var button17 = document.getElementById("clickme17"),
count17 = 0;
button17.onclick = function() {
    let text = "Are you sure you want to indicate interest? You would be signing up on Thursday, 8/25, for the 6-9pm shift.";
    if (confirm(text) == true && count17 == 0) {
      count17 += 1;
      button17.innerHTML = "👍: " + count17;
    } 
};

var button19 = document.getElementById("clickme19"),
count19 = 0;
button19.onclick = function() {
    let text = "Are you sure you want to indicate interest? You would be signing up on Saturday, 8/27, for the 12-3pm shift.";
    if (confirm(text) == true && count19 == 0) {
      count19 += 1;
      button19.innerHTML = "👍: " + count19;
    } 
};

var button22 = document.getElementById("clickme22"),
count22 = 0;
button22.onclick = function() {
    let text = "Are you sure you want to indicate interest? You would be signing up on Tuesday, 8/30, for the 6-9pm shift.";
    if (confirm(text) == true && count22 == 0) {
      count22 += 1;
      button22.innerHTML = "👍: " + count22;
    } 
};
var button23 = document.getElementById("clickme23"),
count23 = 0;
button23.onclick = function() {
    let text = "Are you sure you want to indicate interest? You would be signing up on Wednesday, 8/31, for the 6-9pm shift.";
    if (confirm(text) == true && count23 == 0) {
      count23 += 1;
      button23.innerHTML = "👍: " + count23;
    } 
};

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}