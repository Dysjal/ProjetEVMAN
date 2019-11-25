var touche = 0;
var seconds_left ;
var nbDeJeu = 0;

function Lancer() {
  touche = 0;
  document.getElementById('touche').innerHTML = touche;
 
  var y = document.getElementById("Afficher");
    y.style.display = "block";
     var c = document.getElementById("rond");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(38,38,36,0,2*Math.PI);
ctx.stroke();
  var t = Math.floor((Math.random() * 31) + 0);
  var l = Math.floor((Math.random() * 95) + 0);
  c.style.marginTop =t+"%";
  c.style.marginLeft = l+"%";
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
    console.log(seconds_left);
    if (seconds_left === 0)
    {
    var y = document.getElementById("Afficher");
    y.style.display = "none";
     var x = document.getElementById("Jeu");
    x.style.display = "none";
    var z = document.getElementById("menu");
    z.style.display = "block";
    document.getElementById("ancien").innerHTML = touche;
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
function Clicked (){
  touche++;
  document.getElementById('touche').innerHTML = touche;
  var c = document.getElementById("rond");
  var t = Math.floor((Math.random() * 31) + 0);
  var l = Math.floor((Math.random() * 95) + 0);
  c.style.marginTop =t+"%";
  c.style.marginLeft = l+"%";
  }
