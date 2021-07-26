/* Ileana Bruno
Division A
Ejercicio 9 switch

una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/
function mostrar()
{
	var estacion
	var destino
	var estadia

	estacion=document.getElementById('txtIdEstacion').value;
	destino=document.getElementById('txtIdDestino')	.value;
	estadia=15000

	switch(estacion)
	{
		case"Invierno":
			switch(destino)
			{
				case"Bariloche":
					mensaje=estadia+estadia*20/100;
					break;
				case"Mar del plata":
					mensaje=estadia-estadia*20/100;
					break;
				default:
					mensaje=estadia-estadia*10/100;
			}
		break;

		case"Verano":
			switch(destino)
			{
				case"Bariloche":
					mensaje=estadia-estadia*20/100;
					break;
				case"Mar del plata":
					mensaje=estadia+estadia*20/100;
					break;
				default:
					mensaje=estadia+estadia*10/100;
			}
		break;
		
		default:
			switch(destino)
			{
				case"Cordoba":
					mensaje=estadia;
					break;
				default:
					mensaje=estadia+estadia*10/100;
			}
	}

	alert(mensaje);
}
