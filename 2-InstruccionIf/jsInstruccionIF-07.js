/*
Costanza Lucas
Ejercicio IF 7*/
function mostrar()
{
	let edad;
	let estado;
	const MENOR_EDAD=17;

	edad=parseInt(document.getElementById('txtIdEdad').value);
	estado=document.getElementById('estadoCivil').value;

	if(edad<=MENOR_EDAD&&estado=="Casado"||estado=="Divorciado") //&&=>"Y" - ||=>"O"
	{
		alert("Usted es muy pequeño para NO ser soltero.")
	}
}

/*
	if(edad<=MENOR_EDAD)
	{
		if(estado !="Soltero")
		{
			alert("Es muy pequeño para NO ser soltero")
		}
	}
*/