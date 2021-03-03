/*
Costanza Lucas
Ejercicio FOR 06
*/
function mostrar()
{
	let i;
	let numero;
	let contadorDePares;
	i=0;
	contadorDePares=0;
	
	numero=parseInt(prompt("Ingrese un numero"));	
	while(isNaN(numero)==true)
	{
		numero=parseInt(prompt("El numero ingresado es incorrecto"));
	}
	for(i=0;i<numero;i++) 
	{
		if(i%2==0) //i%2==0 se usa para detectar numeros pares
		{
			contadorDePares++; //Va contando la cantidad de pares
			alert("Numero par: "+i);
		}
	}
	alert("Los numeros pares son: "+contadorDePares); //Muestra solo la cantidad de pares
}//FIN DE LA FUNCIÓN