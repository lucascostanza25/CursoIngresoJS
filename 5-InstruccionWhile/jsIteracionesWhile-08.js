/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
Costanza Lucas
Ejercicio While 8
*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;
	let flag=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado=parseFloat(prompt("Ingrese un numero"));
		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		else
		{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
			flag=1;
		}
		respuesta=prompt("¿Quiere ingresar otro número? si / no");
	}


	document.getElementById('txtIdSuma').value=sumaPositivos;
	if(flag==0)//Si no se ingresa un numero negativo, el valor de flag no cambia, por ende flag=0 y asi los negativos no es 1.
	{
		multiplicacionNegativos=0;
	}
	document.getElementById('txtIdProducto').value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN