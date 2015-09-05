var nomDiv = function(id) 
{ 
return document.getElementById(id);
} 
function ConvertirC() {

/*	var grados = prompt("Digite los grados a convertir: ");
var Centigrados = prompt("Digite a que conversion desea ");*/
		var grados = nomDiv("grados").value;
		//grados=Number(grados)
	var Centigrados = nomDiv("Centigrados").value;
	var kelvin;
	var faren;
	var centi;
	if (Centigrados === "c" || Centigrados === "C" )
	{
		kelvin=(Number(grados) + Number(273)).toFixed(2);
		faren= (Number(32+((9*grados)/5))).toFixed(2);
		alert(grados +" °C equivalen a" + kelvin+"°K" +'\n'+grados+" °C equivalen a" + faren+"°F") ;
	
	}else if( Centigrados==="k" || Centigrados==="K")
	{
		
		centi= (Number(273) - Number(grados)).toFixed(2);
		faren=(Number(((9*(grados-273))/5)+32)).toFixed(2);
		alert(grados +" °K equivalen a" + centi+"°C" +'\n'+grados+" °K equivalen a" + faren+"°F") ;
	}else if( Centigrados==="f" || Centigrados==="F")
	{
		
		centi= (Number((5*(grados-32))/9)).toFixed(2);
		kelvin= (Number(((5*(grados-32))/9)+273)).toFixed(2);
		alert(grados +" °F equivalen a" + centi+"°C" +'\n'+grados+" °F equivalen a" + kelvin+"°K") ;
	}
	else{
	alert("error");
} 

}