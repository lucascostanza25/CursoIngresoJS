/*
Costanza Lucas
Ejercicio Switch 5
División 1A */
function mostrar()
{
	let horaDelDia;
	horaDelDia=parseInt(document.getElementById('txtIdHora').value);
	//Parsear la variable!
	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
		break;
		
		//Shift + alt + f => sacarle los espacios de la izquierda y alinear;
		default:
			alert("Que tengas buen día");
		break;

		/*default:
			alert("¡Ingresó una hora invalida! Pruebe con el formato 24hs, por ejemplo 01:00");
		break;*/
	}
}