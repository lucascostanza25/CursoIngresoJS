/*
Costanza Lucas
Ejercicio IF 4*/
function mostrar()
{
	let edad

	edad=parseInt(document.getElementById('txtIdEdad').value);

	if(edad>=13 && edad<=17)
	{
		alert("Usted es adolescente");
	}
}