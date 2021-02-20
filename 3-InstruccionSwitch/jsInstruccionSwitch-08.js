function mostrar()
{
	let destinoIngresado;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("¡En Bariloche hace frío!");
		break;
		
		case "Cataratas":
			alert("¡En las Cataratas hace mucho calor!");
		break;

		case "Mar del plata":
			alert("¡En Mar del Plata hace frío y calor!");
		break;

		case "Ushuaia":
			alert("¡En Ushuaia hace frío!");
		break;
	}
}