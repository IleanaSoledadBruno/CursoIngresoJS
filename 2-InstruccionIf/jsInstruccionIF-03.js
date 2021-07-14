function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad').value;

	edad=parseInt(edad);

	if (edad>=21) 

	{
		alert("usted es mayor de edad");

	}

	if (edad<=21) 

	{
		alert("usted es menor de edad");
	}
	  


}//FIN DE LA FUNCIÓN