/* Ileana Bruno
Ejercicio 9 Bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var porcentaje;

	sueldo=document.getElementById('txtIdSueldo').value;

	sueldo=parseInt(sueldo);

	porcentaje=prompt("coloque el porcentaje")

	resultado=sueldo + sueldo*porcentaje/100;
	
	document.getElementById('txtIdResultado').value=resultado;


}
