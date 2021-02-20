function mostrar() {
	let horaDelDia;
	horaDelDia = parseInt(document.getElementById('txtIdHora').value);

	switch (horaDelDia) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
		break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("Es de tarde");
		break;

		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			alert("Es de noche");
		break;

		default:
			alert("¡La hora ingresada no existe!");
	}
	//Se puede hacer con IF


	/*if(horaDelDia >=10 && horaDelDia <=19)
	{
		alert("Es de tarde");
	}
	else if(horaDelDia >=20 && horaDelDia <=6)
	{
		alert("Es de noche");
	}
	else if(horaDelDia >=7 && horaDelDia <=11)
	{
		alert("¡Es de mañana!");
	}*/
}