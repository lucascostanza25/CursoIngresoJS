function mostrar()
{
	let mes;
	
	mes=document.getElementById('txtIdMes').value;
	
	switch(mes)
	{
		case "Junio":
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frío!");
		break;

		case "Diciembre":
		case "Enero":
		case "Febrero":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
			alert("Ya pasamos el frio, ahora calor!");
		break;

		case "Marzo":
		case "Abril":
		case "Mayo":
			alert("Falta para el invierno");
		break;
	}


}//FIN DE LA FUNCIÓN