var nomDiv = function(id) 
{ 
return document.getElementById(id);
} 
function Area() {
/*var elemento=prompt("eliga el tipo de elemento para area");*/
var elemento = nomDiv("elemento").value;
switch (elemento) {
case  "a": 
var base = prompt("digite la base: ");
var altura = prompt("digite la altura ");

var areaT= (Number((base*altura)/2)).toFixed(2);		
	alert("el area del triangulo es de " + areaT + " cm^2");
	break;
case  "b": 
var cuadrado = prompt("digite un lado: ");

var areaC= (Math.pow(cuadrado,2)).toFixed(2);		
	alert("el area del cuadrado es de " + areaC+ " cm^2");
	break;
	case  "c": 
var circulo = prompt("digite el radio de la circunferencia: ");
var pi= 3.1416;
var areaCc= (Number(pi*Math.pow(circulo,2))).toFixed(2);		
	alert("el area del circunferencia es de " + areaCc + " cm^2");
	break;

}
} 

