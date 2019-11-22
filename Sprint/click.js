var click = 0 ;
var nbDeJeu = 0;
var seconds_left ;

function incrementer(){
 click++;
 document.getElementById("insert").innerHTML = click;
}

function Timer() {
var x = document.getElementById("Jeu");
 x.style.display = "none";
 var y = document.getElementById("affichage");
    y.style.display = "block";
    if(nbDeJeu === 0){
    	var z = document.getElementById("nbDeJeu");
    	z.style.display = "block";
    	nbDeJeu ++;
    }
 document.getElementById("ancien").innerHTML = click;
}

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
/*
  function tempsRestant(){
    document.getElementById('timer_div').innerHTML = --seconds_left;
  }

while (seconds_left !== 0){
      setInterval(tempsRestant(),1000);
          console.log(seconds_left);
    }
*/
