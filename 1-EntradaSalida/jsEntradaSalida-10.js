/* Ileana Bruno
Ejercicio 10 Bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var porcentaje;
	
	importe=document.getElementById('txtIdImporte').value;

	importe=parseInt(importe);

	porcentaje=prompt("poner porcentaje");

	resultado=importe - importe*porcentaje/100;

	document.getElementById('txtIdResultado').value=resultado;


}
