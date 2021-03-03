/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
Costanza Lucas
Ejercicio While 09
*/
function mostrar()
{
	let flag;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	flag=0;

	respuesta="si";
	
	while(respuesta=="si")
	{
		numeroIngresado=parseFloat(prompt("Ingrese un numero"));
		if(flag==0)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			flag=1;
		}
		if(numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}
		if(numeroIngresado<numeroMinimo)
		{
			numeroMinimo=numeroIngresado;
		}
		respuesta=prompt("¿Desea continuar? si / no");
	}
	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN