var nomDiv = function(id) 
{ 
return document.getElementById(id);
} 
function Peso() {

/* var peso = prompt("Digite su peso: ");*/
		var peso = nomDiv("peso").value;
		var Gravedad= Number(17/100);
		var Luna=(Number(peso*Gravedad)).toFixed(2); //peso en la luna, dos decimales
		alert("tu peso en la luna es de " + Luna);
	
} 

