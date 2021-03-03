/*
Costanza Lucas
Ejercicio FOR 07
*/
function mostrar()
{
	let i;
	let numero;
	let acumuladorDivisores;

	i=0;
	acumuladorDivisores=0;
	numero=parseInt(prompt("Ingrese un numero"));

	for(i=0;i<numero;i++)
	{
		if(numero%i==0)
		{
			acumuladorDivisores++;
			alert("Los numeros divisores son: "+i);
		}
	}
	alert("La cantidad de numeros divisores son: "+acumuladorDivisores);
}