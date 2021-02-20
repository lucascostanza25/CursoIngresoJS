/*
Costanza Lucas
Ejercicio IF 6*/
function mostrar()
{
	let edad;
	let mensaje
	const MAYOR_EDAD=18;
	const ADOLESCENTE1=13;
	const ADOLESCENTE2=17;
	//const NIÑO=12;	

	edad=parseInt(document.getElementById('txtIdEdad').value);

	if(edad>=MAYOR_EDAD)
	{
		mensaje="mayor de edad";
	}
	else
	{
		if(edad>=ADOLESCENTE1 && edad<=ADOLESCENTE2)
		{
			mensaje="adolescente"
		}
		else
		{
			mensaje="niño" //Los años que restan son de una persona niña
		}
	}
	alert("Usted es "+mensaje);
	
	/*if(edad>=MAYOR_EDAD)
	{
		alert("Usted es mayor de edad");
	}
	if(edad>=ADOLESCENTE1 && edad<=ADOLESCENTE2)
	{
		alert("Usted es adolescente");
	}
	if(edad<=NIÑO)
	{
		alert("Usted es un niño");
	}*/
}