(function() {
  'use strict';
  let redLight = document.getElementById("stopButton").onclick = illuminateRed;
  let yellowLight = document.getElementById("slowButton").onclick = illuminateYellow;
  let greenLight = document.getElementById("goButton").onclick = illuminateGreen;
  let button = document.querySelectorAll('.button');
  let rLightOn = false;
  let yLightOn = false;
  let gLightOn = false;

  function illuminateRed() {
    if (rLightOn === false) {
      document.getElementById('stopLight').style.backgroundColor = "red";
      rLightOn = true;
    } else if (rLightOn === true) {
      document.getElementById('stopLight').style.backgroundColor = "black";
      rLightOn = false;
    }
  }

  function illuminateYellow() {
    if (yLightOn  === false) {
      document.getElementById('slowLight').style.backgroundColor = "yellow";
      yLightOn = true;
    } else if (yLightOn === true) {
      document.getElementById('slowLight').style.backgroundColor = "black";
      yLightOn = false;
    }
  }

  function illuminateGreen() {
    if (gLightOn  === false) {
      document.getElementById('goLight').style.backgroundColor = "green";
      gLightOn = true;
    } else if (gLightOn === true) {
      document.getElementById('goLight').style.backgroundColor = "black";
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

// redLight = addEventListener('mouseenter', blah);
// console.log(yellowLight = addEventListener('mouseenter', yellowInMouse));
// console.log(greenLight = addEventListener('mouseenter', greenInMouse));
// console.log(redLight = addEventListener('mouseleave', redOutMouse));
// console.log(yellowLight = addEventListener('mouseleave', yellowOutMouse));
// console.log(greenLight = addEventListener('mouseleave', greenOutMouse));

// let redInMouse = () => {console.log("Entered 'stop' button");}
// let redOutMouse = () => {console.log("Left 'stop' button");}
// let yellowInMouse = () => {console.log("Entered 'slow' button");}
// let yellowOutMouse = () => {console.log("Left 'slow' button");}
// let greenInMouse = () => {console.log("Entered 'go' button");}
// let greenOutMouse = () => {console.log("Left 'go' button");}
