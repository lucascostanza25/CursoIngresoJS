/*
Costanza Lucas
3er ejercicio parcial 2020

En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a)
El nombre de la persona con mas temperatura. +
b)
Cuantos mayores de edad estan viudos +
c)
La cantidad de hombres que hay solteros  o viudos. +
d)
cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura +
e)
El promedio de edad entre los hombres solteros. +
*/
function mostrar()
{
	//Variables generales
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaCorporalIngresada;
	let pregunta;
	let promedio;
	let personaConMasTemperatura;
	//Temperatura
	let temperaturaMasAlta;
	let flagTemperatura;
	//Contadores
	let contadorSoltero;
	let contadorCasado;
	let contadorViudo;
	let contadorViudoMayorEdad;
	let contadorEdadSolteros;
	//Inicialización
	pregunta="si";
	flagTemperatura=0;
	contadorSoltero=0;
	contadorCasado=0;
	contadorViudo=0;
	contadorViudoMayorEdad=0;
	temperaturaMasAlta=0;
	contadorMayorEdad=0;
	contadorEdadSolteros=0;
	

	while(pregunta=='si')
	{
		nombreIngresado=prompt("Ingrese su nombre");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("EL nombre ingresado es invalido. Por favor re ingreselo");
		}

		edadIngresada=prompt("Ingrese su edad");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0)
		{
			edadIngresada=prompt("La edad ingresada es invalida");
			edadIngresada=parseInt(edadIngresada);
		}

		sexoIngresado=prompt("Ingrese su sexo");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("El sexo ingresado es invalido");
			sexoIngresado=parseInt(sexoIngresado);
		}
		
		estadoCivilIngresado=prompt("Ingrese su estado civil");
		while(isNaN(estadoCivilIngresado)==false || estadoCivilIngresado!="soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="viudo")
		{
			estadoCivilIngresado=prompt("EL nombre ingresado es invalido. Por favor re ingreselo");
		}
		
		temperaturaCorporalIngresada=prompt("Ingrese su temperatura corporal");
		temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada)==true || temperaturaCorporalIngresada<0)
		{
			temperaturaCorporalIngresada=prompt("La temperatura corporal es incorrecta");
			temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		}
		
		if(flagTemperatura==0 || temperaturaMasAlta<temperaturaCorporalIngresada)
		{
			temperaturaMasAlta=temperaturaCorporalIngresada;
			personaConMasTemperatura=nombreIngresado;
			flagTemperatura=1;
		}
		/*else if(temperaturaMasAlta<temperaturaCorporalIngresada)
		{
			temperaturaMasAlta=temperaturaCorporalIngresada;
			personaConMasTemperatura=nombreIngresado;
		}*/

		switch(estadoCivilIngresado)
		{
		case "soltero":
			if(sexoIngresado=="m")
			{
				contadorSoltero++;
				contadorEdadSolteros+=edadIngresada; //Se usa un acumulador porque el contador solo cuenta de 1, pero la edad es mas que ese valor.
				promedio=contadorEdadSolteros/contadorSoltero;//EL CONTADOR NO CUENTA LA EDAD, sino la cantidad de veces que se ingresó.
			}
		break;
		
		case "casado":
			contadorCasado++;
		break;

		case "viudo":
			if(edadIngresada>21 && sexoIngresado=="m")
			{
				contadorViudoMayorEdad++;
			}
			else
			{
				contadorViudo++;
			}
		break;
		}
		//Personas de mas de 60 años que tienen mas de 38°
		if(edadIngresada>60 && temperaturaCorporalIngresada>38)
		{
			contadorMayorEdad++;
		}
		pregunta=prompt("¿Desea agregar otro pasajero? si / no");
	}
	
	alert("El nombre de la persona con mas temperatura es "+personaConMasTemperatura+" con: "+temperaturaMasAlta+"°");
	alert("La cantidad de solteros masculinos es: "+contadorSoltero);
	alert("La cantidad de viudos masculinos es: "+contadorViudo);
	alert("La cantidad de viudos mayores de edad masculinos son: "+contadorViudoMayorEdad);
	alert("Las personas con 60 años o mas y con 38 o mas grados son: "+contadorMayorEdad);
	alert("El promedio de edad ingresada entre los hombres solteros: "+promedio);
}
