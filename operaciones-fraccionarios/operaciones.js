var nomDiv = function(id) 
{ 
return document.getElementById(id);
} 
function Operaciones() 
{

var operacion= nomDiv("operacion").value;
var numero1n= nomDiv("n1").value;
var numero1d= nomDiv("d1").value;
var numero2n= nomDiv("n2").value;
var numero2d= nomDiv("d2").value;
/*var numero1 =prompt("escriba la primera fraccion separada de  ");
var numero2 =prompt("escriba la segunda fraccion separada de  ");
var f1= numero1.split( "/");
var f2= numero2.split( "/");
var operacion=prompt("eliga el tipo operacion +-/*");*/

switch (operacion)
 {
 	case  "+": 
 	var num=Number(numero1n*numero2d+numero1d*numero2n);
	var de=Number(numero2d*numero1d);
	var suma3=Number(num/de);
	var suma4=mcd(num,de);
	var a= num/=suma4;
	var b= de/=suma4;
	if (suma3==1||suma3==2||suma3==3||suma3==4||suma3==5)
	{
		alert(suma3);
	}
	else
	{
		alert("la suma es "+a + "/"+b+'\n'+ "forma decimal "+suma3);
	}
	break;

	case  "-": 
	var num=Number(numero1n*numero2d-numero1d*numero2n);
	var de=Number(numero2d*numero1d);
	var resta3=(Number(num/de));
	var resta=mcd(num,de);
	var a= num/=resta;
	var b= de/=resta;
	if (resta3==0||resta3==1||resta3==2||resta3==3||resta3==4||resta3==5)
	{
		alert(resta3);
	}
	else
	{
		alert("la resta es "+a+ "/"+b+'\n'+ "forma decimal "+resta3);
	}
	break;
	case  "*":
	num=Number(numero1n*numero2n);
	de=Number(numero1d*numero2d);
	var mul3=Number(num/de);
	var mul=mcd(num,de);
	a= num/=mul;
	b= de/=mul;
	if (mul3==0||mul3==1||mul3==2||mul3==3||mul3==4||mul3==5)
	{
		alert(mul3);
	}
	else{
		alert("la multiplicacion es "+ a+ "/"+b+'\n'+ "forma decimal "+mul3);
	}
	break;

	case  "/": 
	var num=Number(numero1n*numero2d);
	var de=Number(numero1d*numero2n);
	var div3=(Number(num/de));
	var div= mcd(num,de);
	var a= num/=div;
	var b= de/=div;
	if (div3==1||div3==2||div3==3||div3==4||div3==5)
	{
		alert(div3);
	}
	else{
		alert("la division es "+num+ "/"+de+'\n'+ "forma decimal "+div3);
	}
	break;
	default: 
	alert("operacion no valida");
	}
} 
// se aplica el algoritmo de Euclides
function mcd(a,b)
	{
	 var r = a % b;
	 while(r!=0)
	 {
		 a=b;
		 b=r;
		 r=a%b;
	 }
	 return b;
	}
	 
