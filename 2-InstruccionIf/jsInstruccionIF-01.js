/*
Costanza Lucas
Ejercicio IF 1*/
function mostrar()
{
	let edad;

	edad=parseInt(document.getElementById('txtIdEdad').value);

	if(edad==15)
	{
		alert("Niña bonita");
	}
	else
	{
		alert("Niña pequeña");
	}
}