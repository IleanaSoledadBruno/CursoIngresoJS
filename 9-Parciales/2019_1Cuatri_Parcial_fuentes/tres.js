// Ejercicio Parcial N 3

function mostrar()
{
	var precio;
	var porcentaje;
	var PrecioFinal;

	precio=prompt("indique el precio");

	precio=parseInt(precio);

	porcentaje=prompt("indique porcentaje de descuento");

	porcentaje=parseInt(porcentaje);

	PrecioFinal=precio - (precio*porcentaje/100);

	document.getElementById('elPrecioFinal').value=PrecioFinal;
}
