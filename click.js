var click = 0 ;
var nbDeJeu = 0;
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
  click = -1
  var x = document.getElementById("Jeu");
    x.style.display = "block";
  var y = document.getElementById("affichage");
    y.style.display = "none";
}