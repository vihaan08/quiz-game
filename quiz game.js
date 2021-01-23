var points = sessionStorage.getItem("points");

var head_result = document.getElementById("result-header");
var body_result = document.getElementById("result-body");

head_result.innerHTML = "That's nice! You've got "+points;
body_result.innerHTML = "Marvel have created more avengers than even the geekiest of geeks can remeember!";


function reset(){
location.href = "index.html";
}