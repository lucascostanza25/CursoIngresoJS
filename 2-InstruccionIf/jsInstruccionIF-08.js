/*
Costanza Lucas
Ejercicio IF 8*/
function mostrar()
{
	let edad;
	let estado;
	const MAYOR_EDAD=18;

	edad=parseInt(document.getElementById('txtIdEdad').value);
	estado=document.getElementById('estadoCivil').value;

	if(edad>=MAYOR_EDAD&&estado==("Soltero"))
	{
		alert("Es soltero y no es menor.");
	}

}