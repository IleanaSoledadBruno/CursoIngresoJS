/* Ileana Bruno
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var IngreseNumero1;
	var IngreseNumero2;
	var solucion;

	IngreseNumero1=document.getElementById("txtIdNumeroUno").value;

	IngreseNumero1=parseInt(IngreseNumero1);

	IngreseNumero2=document.getElementById('txtIdNumeroDos').value;

	IngreseNumero2=parseInt(IngreseNumero2);
	
	solucion= IngreseNumero1 +IngreseNumero2;

	alert(solucion);
}

