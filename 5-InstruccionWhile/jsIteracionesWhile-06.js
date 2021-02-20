/*
Costanza Lucas
Ejercicio While 6
*/
function mostrar()
{
	let contador=0;
	let acumulador=0;
	let numeroIngresado;

	while(contador<5)
	{
		numeroIngresado=parseInt(prompt("Ingrese un numero"));
		acumulador=acumulador+numeroIngresado;
		contador++;
	}

	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/5;
}//FIN DE LA FUNCIÓN