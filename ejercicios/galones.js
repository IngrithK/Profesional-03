var nomDiv = function(id) 
{ 
return document.getElementById(id);
} 
function Convertir() 
{
var Galones = nomDiv("numero").value;
	if (!/^-?\d+$/.test(Galones))  //solo numeros enteros
	{
		alert("No es un número entero");
		
	}else{
		litros = 3.7854*Galones;

salida = alert(" los" + Galones +" galones equivalen a" + litros +" litros");



	}

}	