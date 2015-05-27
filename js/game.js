
//Slumpar ett ord från listan 
var ordLista = ["mjauu", "malin", "banan"];

var valtOrd = ordLista[Math.floor(Math.random()*3)];

console.log(valtOrd);

var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
	var användarOrd = document.getElementsByTagName("input")[0].value;

	if (valtOrd === användarOrd) {
		alert("GRattttisss!!");
	} else {
		alert("Försök igen!!");
	}

})