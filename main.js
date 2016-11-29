var ballon = document.getElementById("ballon")
var button = document.getElementById("exp")
var player1Element = document.getElementById("player1")
var player2Element = document.getElementById("player2")

var initialX = 375
var initialY = 250
var step = 5

var y = initialY
var x = initialX
var dirver = 1
var dirhor = 1
var goal1 = {
  x1:0,
  x2:75,
  y1:200,
  y2:300,
}

var goal2 = {
  x1:675,
  x2:750,
  y1:200,
  y2:300,
}

var player1 = {
  x1:95,
  x2:135,
  y1:225,
  y2:275,
  x1Initial:95,
  x2Initial:115,
  y1Innitial:225,
  y2Initial:275,
}

var player2 = {
  x1:625,
  x2:675,
  y1:225,
  y2:275,
  x1Initial:655,
  x2Initial:675,
  y1Innitial:225,
  y2Initial:275,
}

function move() {
  if (x > goal1.x1 && x < goal1.x2 && y > goal1.y1 && y < goal1.y2){
    x = initialX
    y = initialY
    var sblue = document.getElementById("sblue")
    sblue.innerHTML = parseInt(sblue.innerHTML) + 1 ;
  }
  if (x > goal2.x1 && x < goal2.x2 && y > goal2.y1 && y < goal2.y2){
    x = initialX
    y = initialY

    var sred = document.getElementById("sred")
    sred.innerHTML = parseInt(sred.innerHTML) + 1 ;
  }
  if (x < goal1.x2 && (y == goal1.y1 - step && dirver == 1 || y == goal1.y2 + step && dirver == -1)){
    dirver *= -1
  }
  if (x > goal2.x1 && (y == goal2.y1 - step && dirver == 1 || y == goal2.y2 + step && dirver == -1)){
    dirver *= -1
  }

  // collision p1
  if (x > player1.x1 && x < player1.x2 && y > player1.y1 && y < player1.y2){
    dirver *= -1
    dirhor *= -1
  }

  // collision p2
  if (x > player2.x1 && x < player2.x2 && y > player2.y1 && y < player2.y2){
    dirver *= -1
    dirhor *= -1
  }

  if (x > 750 - 15){
    dirhor = -1
  }
  if (y > 500 - 15){
    dirver = -1
  }
  if (x < 0){
    dirhor = 1
  }
  if (y < 0){
    dirver = 1
  }
  x += dirhor * step
  y += dirver * step

  ballon.setAttribute("style", "top:"+y+"px;left:"+x+"px;")
}

function movePlayer1Up() {
  //setTimeout():
  player1.y1 = player1.y1 - 19;
  player1.y2 = player1.y2 - 19;
  player1Element.setAttribute("style", "top:" + player1.y1 + "px;")
}

function movePlayer1Down() {
  //setTimeout():
  player1.y1 = player1.y1 + 19;
  player1.y2 = player1.y2 + 19;
  player1Element.setAttribute("style", "top:" + player1.y1 + "px;")
}

function movePlayer2Up() {
  //setTimeout():
  player2.y1 = player2.y1 - 19;
  player2.y2 = player2.y2 - 19;
  player2Element.setAttribute("style", "top:" + player2.y1 + "px;")
}

function movePlayer2Down() {
  //setTimeout():
  player2.y1 = player2.y1 + 19;
  player2.y2 = player2.y2 + 19;
  player2Element.setAttribute("style", "top:" + player2.y1 + "px;")
}


var interval = setInterval(move , 1000/45)

button.onclick = function() {
  var sred = document.getElementById("sred")
  sred.innerHTML = (sred.innerHTML) = 0 ;
  var sblue = document.getElementById("sblue")
  sblue.innerHTML = (sblue.innerHTML) = 0 ;

}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    // case 82:
    //   var sred = document.getElementById("sred");
    //   var sblue = document.getElementById("sblue");
    //   sred.innerHTML = 0
    //   sblue.innerHTML = 0
    //   player1Element.setAttribute("style", "top:" + player1.y1Initial + "px;")
    //   player1Element.setAttribute("style", "left:" + player1.x1Initial + "px;")
    //   break;
    case 87:
      e.preventDefault();
      movePlayer1Up();
      break;
    case 83:
      e.preventDefault();
      movePlayer1Down();
      break;
  }
}

document.onkeyup = function(e) {
  switch (e.keyCode) {
    case 38:
      e.preventDefault()
      movePlayer2Up();
      break;
    case 40:
      e.preventDefault();
      movePlayer2Down();
      break;
  }
}
