/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var farenheit;
	var centigrados;

	farenheit=document.getElementById('txtIdTemperatura').value;

	farenheit=parseInt(farenheit);

	centigrados=(farenheit-32)*5/9;

	alert(farenheit + " grados farenheit son " +centigrados.toFixed(2)+ " grados centigrados ");
	
}

function CentigradosFahrenheit () 
{
	var centigrados;
	var farenheit;

	centigrados=document.getElementById('txtIdTemperatura').value;

	centigrados=parseInt(centigrados);

	farenheit=(centigrados*9/5)-32;

	alert(centigrados + " grados centigrados son " +farenheit.toFixed(2) + " grados farenheit");

	
}
