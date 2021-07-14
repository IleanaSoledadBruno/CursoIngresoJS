function mostrar()
{
	var persona1;
	var per1;
	var persona2;
	var per2;
	var kilos;
	var promedio;

	persona1=prompt("indique su nombre");

	per1=prompt("indique su peso");

	persona2=prompt("indique su nombre");

	per2=prompt("indique su peso");

	per1=parseInt(per1);

	per2=parseInt(per2);

	kilos=per1+per2;

	promedio=kilos/2;

	alert("ustedes se llaman " +persona1+ " y " +persona2+ " pesan " +per1+ " y " +per2+ " kilogramos respectivamente, juntos pesan " +kilos+ " kilogramos y el promedio del peso de ambos es de " +promedio+ " kilos");
  
}
