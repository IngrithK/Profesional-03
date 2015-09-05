var nomDiv = function(id) 
{ 
return document.getElementById(id);
} 
function Vocales()
{

/*var Palabra = prompt("escriba la palabra ");*/
var Palabra = nomDiv("frase").value;
var contar=0;
var p=Palabra.toLowerCase();  //convierte todo en minuscula
for (var j=0; j< p.length; j++)
{
	if ((p.charAt(j)==="a") || (p.charAt(j)==="e") || (p.charAt(j)==="i") || (p.charAt(j)==="o") || (p.charAt(j)==="u")) // busca en la cadena y devuelve las vocales
	{
		contar++;
	}
}
alert("la palabra "+Palabra+ " contiene " +'\n'+ contar + " vocales");
}