/*
Costanza Lucas
Ejercicio IF 10
*/
function mostrar()
{
	let nota;
	let mensaje;

	nota=Math.floor(Math.random() * 10) + 1;

	if(nota>8)
	{
		mensaje= "excelente";
	}
	else
	{
		if(nota>3)
		{
			mensaje= "aprobado";
		}
		else
		{
			mensaje= "desaprobado";
		}
	}
	alert("Tu nota es "+ nota + ", " + mensaje);
}