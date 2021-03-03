function mostrar()
{
	let i;
	let numero;
	i=0;

	for(i=0; ;i++) //Si no se pone ninguna condición el for va a seguir infinitamente.
	{
		numero=parseInt(prompt("Ingrese un numero"));
		if(numero==9) //Si ingreso el numero 9 se rompe el for infinito.
		{
			break;
		}
	}


}//FIN DE LA FUNCIÓN