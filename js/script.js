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
