/* 
Ileana Bruno
Ejercicio 4 BIS
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var apellido;
	var mensaje;

	nombre=prompt("Ingrese su nombre");
	apellido=prompt("Ingrese su apellido");
	mensaje="su es nombre es " +nombre+ " y su apellido es " +apellido;
	document.getElementById('txtIdNombre').value=mensaje;



	
	
	
}

