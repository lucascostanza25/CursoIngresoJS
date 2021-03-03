function mostrar()
{
	//Declaración de variables
	let repeticiones;
	let i;
	let mensaje;
	//Inicialización
	repeticiones=parseInt(prompt("Ingrese la cantidad de repeticiones que desea"));
	mensaje="Hola UTN FRA"+"<br>";
	i=0; //i es la variable de control

	for(i=0;i<repeticiones;i++)
	{
		document.write(mensaje);
	}
}//FIN DE LA FUNCIÓN