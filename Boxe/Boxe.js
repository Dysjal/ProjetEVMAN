var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var click = 0 ;
var nbDeJeu = 0;
var seconds_left ;

function Lancer() {
  seconds_left = 3;
  click = -1

  document.getElementById('timer_div').innerHTML = seconds_left;

  var x = document.getElementById("Jeu");
    x.style.display = "block";
    
  var y = document.getElementById("affichage");
    y.style.display = "none";

   var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = --seconds_left;

    if (seconds_left <= 0)
    {
        clearInterval(interval);
    }
}, 1000);
}
function Creation (){

  ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
}

