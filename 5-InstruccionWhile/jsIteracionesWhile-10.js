/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. +
2-Suma de los positivos. +
3-Cantidad de positivos. +
4-Cantidad de negativos. +
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos. +
8-Promedios de negativos. +
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	//Negativos
	let sumaNegativos=0;
	let cantidadDeNegativos=0;
	let promedioNegativos;
	//Positivos
	let sumaPositivos=0;
	let cantidadDePositivos=0;
	let promedioPositivos;
	//Pares
	let contadorDePares=0;
	//Diferencia
	let diferencia;
	

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=parseFloat(prompt("Ingrese la cantidad de numeros que desee"));
		if(numeroIngresado<0)
		{
			sumaNegativos=numeroIngresado+sumaNegativos;
			cantidadDeNegativos++;
			promedioNegativos=sumaNegativos/cantidadDeNegativos;
		}
		else
		{
			sumaPositivos=numeroIngresado+sumaPositivos;
			cantidadDePositivos++;
			promedioPositivos=sumaPositivos/cantidadDePositivos;
		}
		respuesta=prompt("¿Desea continuar? si / no");
	}
	//Mostrar informacion en document.write
	document.write("La suma de negativos es: "+sumaNegativos+"<br>"+"La cantidad de negativos es: "+cantidadDeNegativos+"<br>"+"El promedio de los negativos es: "+promedioNegativos+"<br>"+"La suma de los positivos es: "+sumaPositivos+ "<br>"+"La cantidad de positivos es: "+cantidadDePositivos+"<br>"+"El promedio de los positivos es: "+promedioPositivos);
	//document.write("La suma de los positivos es: "+sumaPositivos+"<br>"+"La cantidad de positivos es: "+cantidadDePositivos+"<br>"+"El promedio de los positivos es: "+promedioPositivos);

}