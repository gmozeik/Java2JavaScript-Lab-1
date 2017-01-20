" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function lab1 () {
   for (var i = 1; i < 11; i++) {
     display.innerHTML += (i + "<br>");
   }
}

function lab2 () {
  for (var i = 1; i < 21; i++) {
    if (i % 2 != 0) {
      display.innerHTML += (i + "<br>");
    }
  }
}

function lab3 () {
  for (var i = 1; i < 101; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      display.innerHTML += (i + "<br>");
    }
  }
}

function lab4 () {
  var i = Math.floor(Math.random() * 100);
  var j = Math.floor(Math.random() * 100);
  var k = Math.floor(Math.random() * 100);
  var l = Math.floor(Math.random() * 100);
  display.innerHTML += (i + "<br>" + j + "<br>" + k + "<br>" + l);
}

function lab5 () {
  var n = prompt("Give me a number.");
  for (var i = 1; i < n; i++) {
    if (i % 2 === 0) {
      display.innerHTML += (i + "<br>");
    }
  }
}

function lab6 () {
  var n = prompt("Give me a number.");
  for (var i = 1; i <= n; i++) {
    display.innerHTML += Math.pow(2, i) + "<br>";
  }
}

function lab7 () {
  while (answer != "Yes") {
    var answer = prompt("Are we there yet?");
  }
  display.innerHTML += "Good!";
}

function lab8 () {
  var triangleNumber = prompt("How many lines?");
  for (var i = 0; i < triangleNumber; i++) {
    for (var j = 0; j < i + 1; j++) {
      display.innerHTML += "*";
    }
    display.innerHTML += "<br>";
    }
}

function lab9 () {
  for (var i = 1; i < 5; i++) {
    for (var j = 1; j <= 4; j++) {
      display.innerHTML += "|" + i * j;
    }
    display.innerHTML += "|<br>";
  }
}

function lab10 (n) {
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      display.innerHTML += "|" + i * j;
    }
    display.innerHTML += "|<br>";
  }
}
