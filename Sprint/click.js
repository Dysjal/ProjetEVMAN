var click = 0 ;
var nbDeJeu = 0;
var seconds_left ;
var classement = [42,41,37,34,29,25,22,22,20,19];

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
         classe(click);

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
 function classe (point){
    for ( var i =0; i<10; i++){
      if(point >= classement[i]){
        classement[i]=point;
        i=10;

      }
     }
     document.getElementById("class1").innerHTML ="1 : "+ classement[0];
     document.getElementById("class2").innerHTML ="2 : "+ classement[1];
     document.getElementById("class3").innerHTML ="3 : "+ classement[2];
     document.getElementById("class4").innerHTML ="4 : "+ classement[3];
     document.getElementById("class5").innerHTML ="5 : "+ classement[4];
     document.getElementById("class6").innerHTML ="6 : "+ classement[5];     
     document.getElementById("class7").innerHTML ="7 : "+ classement[6];
     document.getElementById("class8").innerHTML ="8 : "+ classement[7];
     document.getElementById("class9").innerHTML ="9 : "+ classement[8];
    document.getElementById("class10").innerHTML ="10 : "+ classement[9];



   
  }