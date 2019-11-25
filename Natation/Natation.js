var score = 0;
var seconds_left ;
var nbDeJeu = 0;
var bool=0;

function Lancer() {
 
  var y = document.getElementById("Afficher");
    y.style.display = "block";
    document.getElementById("score").innerHTML = score;
     
}

function Timer(){
    seconds_left = 15;
    document.getElementById('timer_div').innerHTML = seconds_left;

  var x = document.getElementById("Jeu");
    x.style.display = "block";
    
  var y = document.getElementById("menu");
    y.style.display = "none";
    if(nbDeJeu === 0){
      var z = document.getElementById("nbDeJeu");
      z.style.display = "block";
      nbDeJeu ++;
    }


   var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = --seconds_left;
    if (seconds_left === 0) {
    var y = document.getElementById("Afficher");
    y.style.display = "none";
     var x = document.getElementById("Jeu");
    x.style.display = "none";
    var z = document.getElementById("menu");
    z.style.display = "block";
    document.getElementById("ancien").innerHTML = score;
        clearInterval(interval);
    }
}, 1000);

}
function Creation (){
    var y = document.getElementById("Afficher");
    y.style.display = "none";
     var x = document.getElementById("Jeu");
    x.style.display = "none";
    var z = document.getElementById("nbDeJeu");
    z.style.display = "none";
}

function clickGauche(){
  if(bool ===0){
    score ++;
    document.getElementById("score").innerHTML = score;
    bool = 1;
  }
}
function clickDroit(){
  if(bool ===1){
    score ++;
    document.getElementById("score").innerHTML = score;
    bool=0;
  }
}