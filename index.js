(function() {
  'use strict';
  document.getElementById("stopButton").onclick = illuminateRed;
  document.getElementById("slowButton").onclick = illuminateYellow;
  document.getElementById("goButton").onclick = illuminateGreen;
  let button = document.querySelectorAll('.button');
  let rLightOn = false;
  let yLightOn = false;
  let gLightOn = false;

  function illuminateRed() {
    if (rLightOn === false) {
      document.getElementById('stopLight').style.backgroundColor = "red";
      console.log("Stop light bulb on");
      rLightOn = true;
    } else if (rLightOn === true) {
      document.getElementById('stopLight').style.backgroundColor = "black";
      console.log("Stop light bulb off");
      rLightOn = false;
    }
  }

  function illuminateYellow() {
    if (yLightOn  === false) {
      document.getElementById('slowLight').style.backgroundColor = "yellow";
      console.log("Yellow light bulb on");
      yLightOn = true;
    } else if (yLightOn === true) {
      document.getElementById('slowLight').style.backgroundColor = "black";
      console.log("Yellow light bulb off");
      yLightOn = false;
    }
  }

  function illuminateGreen() {
    if (gLightOn  === false) {
      document.getElementById('goLight').style.backgroundColor = "green";
      console.log("Green light bulb on");
      gLightOn = true;
    } else if (gLightOn === true) {
      document.getElementById('goLight').style.backgroundColor = "black";
      console.log("Green light bulb off");
      gLightOn = false;
    }
  }

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mouseenter', function(event) {
      console.log("Entered " + event.target.textContent + " button");
    })
  }

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mouseleave', function(event) {
      console.log("Left " + event.target.textContent + " button");
    })
  }


})();
