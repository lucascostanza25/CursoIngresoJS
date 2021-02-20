function mostrar()
{
	let destinoIngresado;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("¡Bariloche se encuentra en el sur de nuestro país!");
		break;
		
		case "Cataratas":
			alert("¡Las Cataratas se encuentran en el norte de nuestro país!");
		break;

		case "Mar del plata":
			alert("¡Mar del plata se encuentra en la costa sur de nuestro país!");
		break;

		case "Ushuaia":
			alert("¡Ushuaia se encuentra en el sur de nuestro país!");
		break;
	}
}