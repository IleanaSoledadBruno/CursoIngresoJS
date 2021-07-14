/* Ileana Bruno
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var lado;
	var ancho;
	var alambre;

	lado=document.getElementById('txtIdLargo').value;

	lado=parseInt(lado);

	ancho=document.getElementById('txtIdAncho').value;

	ancho=parseInt(ancho);

	alambre=(lado*2+ancho*2)*3;

	alert("usted debe comprar "+alambre +" metros de alambre");


}
function Circulo () 
{
	var radio;
	var alambre;
	var perimetro;

	radio=document.getElementById('txtIdRadio').value;
	
	radio=parseInt(radio);

	perimetro=2*radio*3.14;

	alambre=perimetro*3;

	alert("usted tiene que comprar " +alambre+ " metros de alambre");
	
}
function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var bolsacemento;
	var bolsacal;

	largo=document.getElementById('txtIdLargo').value;

	largo=parseInt(largo);

	ancho=document.getElementById('txtIdAncho').value;

	ancho=parseInt(ancho);

	area=largo*ancho;

	bolsacemento=area*2;

	bolsacal=area*3;

	alert("usted debe comprar " +bolsacemento+ " bolsas de cemento y " +bolsacal+ " bolsas de cal para hacer el contra piso");
}