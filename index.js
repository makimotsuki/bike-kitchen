function move() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 8) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
  }
  function move2() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 17) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
  }
  function move3() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 25) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
  }
  function move4() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 33) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
  }
  function move5() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 42) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
  }
  function move6() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
  }
  function move7() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 58) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
  }
  function move8() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 67) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
  }
  function move9() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 75) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
  }
  function move10() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 83) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
  }
  function move11() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 92) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
  }
  function move12() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
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