/*
Ileana Bruno
Ejercicio 5 bis
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var apellido;
	var edad;
	var mensaje;

	nombre=document.getElementById('txtIdNombre').value;
	apellido=prompt("Ingrese su apellido");
	edad=document.getElementById('txtIdEdad').value;
	mensaje=("su nombre es " +nombre+ " " +apellido+ " y tiene " +edad+ " años");

	
	alert(mensaje);
}

