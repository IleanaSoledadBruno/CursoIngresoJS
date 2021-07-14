/* Ileana Bruno
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var solucion;

	numero1=document.getElementById('txtIdNumeroUno').value;

	numero1=parseInt(numero1);

	numero2=document.getElementById('txtIdNumeroDos').value;

	numero2=parseInt(numero2);

	alert(numero1 +numero2);	
}

function restar()
{
	var numero1;
	var numero2;
	var solucion;

	numero1=document.getElementById('txtIdNumeroUno').value;

	numero1=parseInt(numero1);

	numero2=document.getElementById('txtIdNumeroDos').value;
	
	numero2=parseInt(numero2);

	alert(numero1 -numero2);
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var solucion;

	numero1=document.getElementById('txtIdNumeroUno').value;

	numero1=parseInt(numero1);

	numero2=document.getElementById('txtIdNumeroDos').value;

	numero2=parseInt(numero2);

	alert(numero1 *numero2);
	
}

function dividir()
{
	var numero1;
	var numero2;
	var solucion;

	numero1=document.getElementById('txtIdNumeroUno').value;

	numero1=parseInt(numero1);

	numero2=document.getElementById('txtIdNumeroDos').value;

	numero2=parseInt(numero2);

	alert(numero1 /numero2);
	
}

