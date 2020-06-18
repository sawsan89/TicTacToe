//2 players 
//start always x
//detect a win or tie and display >> can make it alert msg

var player1;
var player2;

var table = document.getElementById("table");
var cell0 = document.getElementById("table").rows[0].cells[0];
//document.write(cell[0].innerHTML);

var rows = document.getElementById("table").rows;



for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        var x = rows[i].cells[j];
        x.onclick = function(){
        x.innerHTML = "NEW CONTENT" 
             };
        };
    };


function restart() {
   // document.getElementById("table").reset();  
   for (var i = 0; i < 3; i++) {
    for (var j = 0; j <3; j++) {
        rows[i].cells[j].textContent  = " ";
        console.log(rows[i].cells[j]);
     };
    };
  };

