/*
Costanza Lucas
Division 1A

Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado + 
b)El porcentaje de enfermos sobre el total de mascotas +
c)El nombre de la ultima mascota de tipo "otra cosa" +
d)El animal sin pelo con menor temperatura corporal +
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal +
f)Sumando gatos y perros que porcentaje del total de mascotas son? +
g)Que estado clinico tiene la menor cantidad de mascotas +
H)Cual es el promedio de kilos de peso tomando todas las mascotas +
i)El nombre y raza del gato sin pelos mas liviano +
*/

function mostrar()
{
	let pregunta;
	let tipoMascotaIngresada;
	let tipoPelajeIngresado;
	let nombreMascotaIngresado;
	let edadMascotaIngresado;
	let razaMascotaIngresado;
	let pesoMascotaIngresado;
	let estadoClinicoIngresado;
	let temperaturaCorporalIngresada;
	let nombreUltimoOtros;
	let temperaturaCorporalMinima;
	let nombreTemperaturaMinima;
	let mascotaMenorPromedioTemperatura;
	let estadoClinicoMenorCantidad;
	//Promedios
	let promedioEnfermos;
	let promedioGatosYPerros;
	let promedioTemperaturaPerro;
	let promedioTemperaturaGato;
	let promedioTemperaturaOtro;
	let promedioPesoTodasLasMascotas;
	//Contadores
	let contadorMascotasGeneral;
	let contadorGatoYPerro;
	let contadorPerro;
	let contadorGato;
	let contadorOtro;
	let contadorEnfermos;
	let contadorInternados;
	let contadorDeAlta;
	let contadorUltimoOtro;
	//Acumuladores
	let acumuladorTemperaturaPerro;
	let acumuladorTemperaturaGato;
	let acumuladorTemperaturaOtro;
	let acumuladorPeso;
	//Flags
	let flagPerroMasPesado
	let flagUltimoOtro;
	let flagTemperaturaMinima;
	//Perro mas pesado
	let nombrePerroMasPesado;
	let pesoPerroMasPesado;
	//Inicialización
	pregunta="si";
	contadorMascotasGeneral=0;
	contadorGatoYPerro=0;
	contadorPerro=0;
	contadorGato=0;
	contadorOtro=0;
	contadorUltimoOtro=0;
	contadorEnfermos=0;
	contadorInternados=0;
	contadorDeAlta=0;
	promedioEnfermos=0;
	promedioGatosYPerros=0;
	flagPerroMasPesado=0;
	temperaturaCorporalMinima=0;
	flagTemperaturaMinima=0;
	acumuladorTemperaturaPerro=0;
	acumuladorTemperaturaGato=0;
	acumuladorTemperaturaOtro=0;
	acumuladorPeso=0;
	

	while(pregunta=='si')
	{
		tipoMascotaIngresada=prompt("Ingrese el tipo de mascota (perro / gato / otro)");
		while(isNaN(tipoMascotaIngresada)==false || tipoMascotaIngresada!="perro" && tipoMascotaIngresada!="gato" && tipoMascotaIngresada!="otro")
		{
			tipoMascotaIngresada=prompt("El tipo de mascota ingresado es incorrecto");
		}

		tipoPelajeIngresado=prompt("Ingrese el tipo de pelaje de su mascota (corto / largo / sin pelo)");
		while(isNaN(tipoPelajeIngresado)==false || tipoPelajeIngresado!="corto" && tipoPelajeIngresado!="largo" && tipoPelajeIngresado!="sin pelo")
		{
			tipoPelajeIngresado=prompt("El tipo de pelo ingresado es incorrecto");
		}

		nombreMascotaIngresado=prompt("Ingrese el nombre de su mascota");
		while(isNaN(nombreMascotaIngresado)==false)
		{
			nombreMascotaIngresado=prompt("El nombre ingresado es incorrecto");
		}

		edadMascotaIngresado=prompt("Ingrese la edad de su mascota (No puede ser menor a 0 ni mayor a 50)");
		edadMascotaIngresado=parseInt(edadMascotaIngresado);
		while(isNaN(edadMascotaIngresado)==true || edadMascotaIngresado<0 || edadMascotaIngresado>50)
		{
			edadMascotaIngresado=prompt("La edad ingresada es incorrecta");
			edadMascotaIngresado=parseInt(edadMascotaIngresado);
		}

		razaMascotaIngresado=prompt("Ingrese la raza de su mascota");
		while(isNaN(razaMascotaIngresado)==false)
		{
			razaMascotaIngresado=prompt("La raza ingresada es incorrecta");
		}

		pesoMascotaIngresado=prompt("Ingrese el peso de su mascota (No puede ser menor a 0 ni mayor a 100)");
		pesoMascotaIngresado=parseInt(pesoMascotaIngresado);
		while(isNaN(pesoMascotaIngresado)==true || pesoMascotaIngresado<0 || pesoMascotaIngresado>100)
		{
			pesoMascotaIngresado=prompt("El peso ingresado es incorrecto");
			pesoMascotaIngresado=parseInt(pesoMascotaIngresado);
		}

		estadoClinicoIngresado=prompt("Ingrese el estado clinico de su mascota (enfermo / internado / de alta)");
		while(isNaN(estadoClinicoIngresado)==false || estadoClinicoIngresado!="enfermo" && estadoClinicoIngresado!="internado" && estadoClinicoIngresado!="de alta")
		{
			estadoClinicoIngresado=prompt("El estado clinico ingresado es incorrecto");
		}

		temperaturaCorporalIngresada=prompt("Ingrese la temperatura corporal de su mascota (No puede ser menor a 0 ni mayor a 50)");
		temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada)==true || temperaturaCorporalIngresada<0 || temperaturaCorporalIngresada>50)
		{
			temperaturaCorporalIngresada=prompt("La temperatura corporal ingresado es incorrecto");
			temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		}

		switch(tipoMascotaIngresada)
		{
			case "perro":
				contadorMascotasGeneral++;
				contadorGatoYPerro++;
				contadorPerro++;
				acumuladorTemperaturaPerro+=temperaturaCorporalIngresada;
				acumuladorPeso+=pesoMascotaIngresado;
			break;

			case "gato":
				contadorMascotasGeneral++;
				contadorGatoYPerro++;
				contadorGato++;
				acumuladorTemperaturaGato+=temperaturaCorporalIngresada;
				acumuladorPeso+=pesoMascotaIngresado;
			break;

			case "otro":
				contadorMascotasGeneral++;
				contadorOtro++;
				acumuladorTemperaturaOtro+=temperaturaCorporalIngresada;
				acumuladorPeso+=pesoMascotaIngresado;
			break;
		}

		switch(estadoClinicoIngresado)
		{
			case "internado":
				contadorInternados++;
			break;

			case "enfermo":
				contadorEnfermos++;
			break;

			case "de alta":
				contadorDeAlta++;
			break;
		}

		if(tipoMascotaIngresada=="perro")
		{
			if(flagPerroMasPesado==0 || pesoMascotaIngresado>pesoPerroMasPesado)
			{
				pesoPerroMasPesado=pesoMascotaIngresado;
				nombrePerroMasPesado=nombreMascotaIngresado;
				flagPerroMasPesado=1;
			}
		}
		
		pregunta=prompt("¿Desea ingresar otra mascota? si/ no");
	}

	if(tipoMascotaIngresada=="otro")
	{
		if(flagUltimoOtro==0 || contadorOtro>contadorUltimoOtro)
		{
			contadorUltimoOtro=contadorOtro;
			nombreUltimoOtros=nombreMascotaIngresado;
			flagUltimoOtro=1;
		}
	}

	if(tipoPelajeIngresado=="sin pelo")
	{
		if(flagTemperaturaMinima==0 || temperaturaCorporalIngresada<temperaturaCorporalMinima)
		{
			temperaturaCorporalMinima=temperaturaCorporalIngresada;
			nombreTemperaturaMinima=nombreMascotaIngresado
			flagTemperaturaMinima=1;
		}
	}
	
	promedioGatosYPerros=contadorGatoYPerro/contadorMascotasGeneral;
	promedioTemperaturaPerro=acumuladorTemperaturaPerro/contadorPerro;
	promedioTemperaturaGato=acumuladorTemperaturaGato/contadorGato;
	promedioTemperaturaOtro=acumuladorTemperaturaOtro/contadorOtro;
	promedioEnfermos=contadorEnfermos/contadorMascotasGeneral;
	promedioPesoTodasLasMascotas=acumuladorPeso/contadorMascotasGeneral;

	if(promedioTemperaturaPerro<promedioTemperaturaGato && promedioTemperaturaPerro<promedioTemperaturaOtro)
	{
		mascotaMenorPromedioTemperatura="perro";
	}
	else if(promedioTemperaturaGato<promedioTemperaturaOtro)
	{
		mascotaMenorPromedioTemperatura="gato";
	}
	else
	{
		mascotaMenorPromedioTemperatura="otro";
	}

	if(contadorEnfermos<contadorDeAlta && contadorEnfermos<contadorInternados)
	{
		estadoClinicoMenorCantidad="enfermo";
	}
	else if(contadorDeAlta<contadorInternados)
	{
		estadoClinicoMenorCantidad="de alta";
	}
	else
	{
		estadoClinicoMenorCantidad="internado";
	}
	
	alert("El perro mas pesado es "+nombrePerroMasPesado);
	alert("El promedio de enfermos es "+promedioEnfermos);
	alert("El ultimo OTRO es "+nombreUltimoOtros);
	alert("El nombre del animal SIN PELO con menos tempertura es "+nombreTemperaturaMinima);
	alert("La tipo de mascota con menor promedio de temperatura corporal es "+mascotaMenorPromedioTemperatura);
	alert("El porcentaje de gatos y y perros es "+promedioGatosYPerros);
	alert("El estado clinico con mayor cantidad de mascotas es "+estadoClinicoMenorCantidad);
	alert("El promedio del peso de todas las mascotas es "+promedioPesoTodasLasMascotas);
}
/*
Costanza Lucas
Division 1A

Para una institución educativa se necesitan registrar los datos de 15 alumnos. Nos solicitan nombre, carrera , edad, sexo("f" o "m")
y modalidad("presencial", "a distancia" o "semi-presencial")y promedio general. 
Luego nos solicitan los siguientes informes:
a) La Carrera de la persona con mas promedio general. +
b) Cuantos mayores de edad(más de 17) cursan presencial. +
c) La cantidad de Mujeres que cursan a distancia o semi-presencial. +
d) Cuantas personas adultas(mas de 40 años), tienen mas de 7 de promedio general. +
e) El promedio de edad entre las mujeres que cursan a distancia. +

	let contador;
	let nombreAlumnoIngresado;
	let carreraIngresada;
	let edadIngresada;
	let sexoIngresado;
	let modalidadIngresada;
	let promedioGeneralIngresado;
	let promedioGeneralMaximo;
	let carreraPromedioMaximo;
	let promedioEdadMujerDistancia;
	//Contadores
	let contadorPresencial;
	let contadorMujerDistancia;
	let contadorMujerSemiP;
	let contadorAdultoPromedioGeneral;
	//Acumuladores
	let acumuladorEdadMujerDistancia;
	//Flag
	let flagPromedioGeneral;
	//Inicialización
	contador=0;
	flagPromedioGeneral=0;
	contadorPresencial=0;
	contadorMujerDistancia=0;
	contadorMujerSemiP=0;
	contadorAdultoPromedioGeneral=0;
	acumuladorEdadMujerDistancia=0;
	promedioEdadMujerDistancia=0;

	while(contador<15)
	{
		nombreAlumnoIngresado=prompt("Ingrese el nombre del alumno");
		while(isNaN(nombreAlumnoIngresado)==false)
		{
			nombreAlumnoIngresado=prompt("El nombre del alumno ingresado es incorrecto");
		}

		carreraIngresada=prompt("Ingrese la carrera del alumno");
		while(isNaN(carreraIngresada)==false)
		{
			carreraIngresada=prompt("La carrera del alumno ingresado es incorrecto");
		}

		edadIngresada=prompt("Ingrese la edad del alumno (No puede ser menor a 0 o mayor a 100)");
		edadIngresada=parseFloat(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0 || edadIngresada>100)
		{
			edadIngresada=prompt("La edad del alumno ingresado es incorrecta");
			edadIngresada=parseFloat(edadIngresada);
		}

		sexoIngresado=prompt("Ingrese el sexo del alumno (f / m)");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("El sexo del alumno ingresado es incorrecto");
		}

		modalidadIngresada=prompt("Ingrese la modalidad del alumno (presencial / a distancia / semi presencial)");
		while(isNaN(modalidadIngresada)==false || modalidadIngresada!="presencial" && modalidadIngresada!="a distancia" && modalidadIngresada!="semi presencial")
		{
			modalidadIngresada=prompt("La modalidad del alumno ingresado es incorrecto");
		}

		promedioGeneralIngresado=prompt("Ingrese el promedio general del alumno (No puede ser menor a 0 o mayor a 10)");
		promedioGeneralIngresado=parseFloat(promedioGeneralIngresado);
		while(isNaN(promedioGeneralIngresado)==true || promedioGeneralIngresado<0 || promedioGeneralIngresado>10)
		{
			promedioGeneralIngresado=prompt("El promedio general del alumno ingresado es incorrecto");
			promedioGeneralIngresado=parseFloat(promedioGeneralIngresado);
		}

		if(flagPromedioGeneral==0 || promedioGeneralIngresado>promedioGeneralMaximo)
		{
			promedioGeneralMaximo=promedioGeneralIngresado;
			carreraPromedioMaximo=carreraIngresada;
			flagPromedioGeneral=1;
		}

		switch(modalidadIngresada)
		{
			case "presencial":
				if(edadIngresada>17)
				{
					contadorPresencial++;
				}	
			break;

			case "a distancia":
				if(sexoIngresado=="f")
				{
					contadorMujerDistancia++;
					acumuladorEdadMujerDistancia+=edadIngresada;
				}
			break;

			case "semi presencial":
				if(sexoIngresado=="f")
				{
					contadorMujerDistancia++;
				}
			break;
		}

		if(edadIngresada>40 && promedioGeneralIngresado>8 && promedioGeneralIngresado<10)
		{
			contadorAdultoPromedioGeneral++;
		}

		
		contador++;
	}
	
	promedioEdadMujerDistancia=acumuladorEdadMujerDistancia/contadorMujerDistancia; //Poner el promedio FUERA del while

	alert("La carrera de la persona con mas promedio general es "+carreraPromedioMaximo);
	alert("La cantidad de mayores de 17 que cursan presencial es "+contadorPresencial);
	alert("La cantidad de mujeres que cursan a distancia o semi presencial es "+contadorMujerDistancia);
	alert("La cantidad de adultos que tienen mas de 7 en el promedio general es "+contadorAdultoPromedioGeneral);
	alert("El promedio de mujeres que cursan a distancia es "+promedioEdadMujerDistancia);
	*/

	/* EJERCICIO 3
	let nombreIngresado;
	let nacionalidadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaIngresada;
	let edadIngresada;
	let flagPersonaMasTemperatura;
	let personaMasTemperatura;
	let nacionalidadPersonaMasTemperatura;
	let promedio;
	let pregunta;
	//Contadores
	let contadorMayorEdad;
	let contadorMujerSoltera;
	let contadorMujerViuda;
	let contadorMujerCasada;
	let contadorMayorEdadTemperaturaAlta;
	let contadorSoltero;
	//Acumuladores
	let acumuladorMujerCasada;
	//Inicialización
	contadorMayorEdad=0;
	contadorMujerSoltera=0;
	contadorMujerViuda=0;
	contadorMujerCasada=0;
	contadorMayorEdadTemperaturaAlta=0;
	acumuladorMujerCasada=0;
	acumuladorEdadIngresada=0;
	flagPersonaMasTemperatura=0;
	personaMasTemperatura=0;
	contadorSoltero=0;
	pregunta="si";

	while(pregunta=='si')
	{
		nombreIngresado=prompt("Ingrese el nombre del pasajero");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("El nombre ingresado es incorrecto");
		}

		nacionalidadIngresada=prompt("Ingrese la nacionalidad del pasajero");
		while(isNaN(nacionalidadIngresada)==false)
		{
			nacionalidadIngresada=prompt("La nacionalidad ingresada es incorrecta");
		}

		sexoIngresado=prompt("Ingrese el sexo del pasajero");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("El sexo ingresado es incorrecto");
		}

		estadoCivilIngresado=prompt("Ingrese el estado civil del pasajero");
		while(isNaN(estadoCivilIngresado)==false || estadoCivilIngresado!="casado" && estadoCivilIngresado!="viudo" && estadoCivilIngresado!="soltero")
		{
			estadoCivilIngresado=prompt("El estado civil ingresado es incorrecto");
		}

		temperaturaIngresada=prompt("Ingrese la temperatura del pasajero");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada)==true)
		{
			temperaturaIngresada=prompt("La temperatura ingresada es incorrecta");
		}

		edadIngresada=prompt("Ingrese la edad del pasajero");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true)
		{
			edadIngresada=prompt("La edad ingresada ingresada es incorrecta");
		}
		
		switch(estadoCivilIngresado)
		{
			case "soltero":
				contadorSoltero++;
				if(sexoIngresado=='f')
				{
					contadorMujerSoltera++;
				}
				if(edadIngresada>17)
				{
					contadorMayorEdad++;
				}
				if(edadIngresada>60 && temperaturaIngresada>38)
				{
					contadorMayorEdadTemperaturaAlta++;
				}
			break;

			case "casado":
				contadorMujerCasada++;
				acumuladorMujerCasada+=edadIngresada;
				promedio=acumuladorMujerCasada/contadorMujerCasada;
			break;

			case "viudo":
				contadorMujerViuda++;
			break;
		}
		
		if(flagPersonaMasTemperatura==0 || temperaturaIngresada>personaMasTemperatura)
		{
			personaMasTemperatura=temperaturaIngresada;
			nacionalidadPersonaMasTemperatura=nacionalidadIngresada;
			flagPersonaMasTemperatura=1;
		}
		
		
		pregunta=prompt("¿Desea ingresar a otro pasajero? si / no");

	}
	document.write("La nacionalidad de la persona con mas temperatura es "+nacionalidadPersonaMasTemperatura+"<br>");
	document.write("La cantidad de mayores de edad solteros es "+contadorMayorEdad+"<br>");
	document.write("La cantidad de mujeres solteras es "+contadorMujerSoltera+"<br>");
	document.write("La cantidad de mujeres viudas es "+contadorMujerViuda+"<br>");
	document.write("La cantidad de personas de la tercera edad con mas de 38 de temperatura es "+contadorMayorEdadTemperaturaAlta+"<br>");
	document.write("El promedio de edad de las mujeres casadas es "+promedio);
	*/

		/*
	let contador;
	let tipoMascotaIngresada;
	let razaPerroIngresado;
	let razaGatoIngresado;
	let razaPajaroIngresado;
	let razaOtroIngresado;
	let edadPerroIngresado;
	let edadPerroMasViejo;
	let nombrePerroMasViejo;
	let edadGatoIngresado;
	let edadGatoMasViejo;
	let nombreGatoMasViejo;
	let edadPajaroIngresado;
	let edadPajaroMasViejo;
	let nombrePajaroMasViejo;
	let edadMascotaOtros;
	let edadOtrosMasViejo;
	let nombreOtrosMasViejo;
	let nombrePerroIngresado;
	let nombreGatoIngresado;
	let nombrePajaroIngresado;
	let nombreOtroIngresado;
	let razaGatoMasAnimales;
	//Contadores
	let contadorGatoSiames;
	let contadorGatoTurco;
	let contadorGatoPeterbald;
	let contadorGatoGenerico;
	//Flags
	let flagPerro;
	let flagGato;
	let flagPajaro;
	let flagOtro;
	//Inicialización
	contador=0;
	flagPerro=0;
	flagGato=0;
	flagPajaro=0;
	flagOtro=0;
	contadorGatoSiames=0;
	contadorGatoTurco=0;
	contadorGatoPeterbald=0;
	contadorGatoGenerico=0;

	while(contador<3)
	{
		tipoMascotaIngresada=prompt("Ingrese el tipo de mascota");
		while(isNaN(tipoMascotaIngresada)==false || tipoMascotaIngresada!="gato" && tipoMascotaIngresada!="perro" && tipoMascotaIngresada!="pajaro" && tipoMascotaIngresada!="otro")
		{
			tipoMascotaIngresada=prompt("El tipo de mascota ingresada es incorrecta");
		}

		if(tipoMascotaIngresada=='perro')
		{
			razaPerroIngresado=prompt("Ingrese la raza de su perro");
			while(isNaN(razaPerroIngresado)==false || razaPerroIngresado!="pastor" && razaPerroIngresado!="toy" && razaPerroIngresado!="callejero")
			{
				razaPerroIngresado=prompt("La raza del perro ingresado es incorrecta");
			}

			edadPerroIngresado=prompt("Ingrese la edad de su perro entre 1 a 20 años");
			edadPerroIngresado=parseInt(edadPerroIngresado)
			while(isNaN(edadPerroIngresado)==true || edadPerroIngresado<1 || edadPerroIngresado>20)
			{
				edadPerroIngresado=prompt("La edad ingresada del perro es incorrecta");
				edadPerroIngresado=parseInt(edadPerroIngresado)
			}

			nombrePerroIngresado=prompt("Ingrese el nombre de su perro");
			while(isNaN(nombrePerroIngresado)==false)
			{
				nombrePerroIngresado=prompt("El nombre del perro ingresado es incorrecta");
			}
		}
		else if(tipoMascotaIngresada=="gato")
		{
			razaGatoIngresado=prompt("Ingrese la raza de su gato")
			while(isNaN(razaGatoIngresado)==false || razaGatoIngresado!="siames" && razaGatoIngresado!="turco" && razaGatoIngresado!="peterbald" && razaGatoIngresado!="generico")
			{
				razaGatoIngresado=prompt("La raza del gato ingresado es incorrecta");
			}

			edadGatoIngresado=prompt("Ingrese la edad de su gato entre 1 a 20 años");
			edadGatoIngresado=parseInt(edadGatoIngresado)
			while(isNaN(edadGatoIngresado)==true || edadGatoIngresado<1 || edadGatoIngresado>20)
			{
				edadGatoIngresado=prompt("La edad ingresada del gato es incorrecta");
				edadGatoIngresado=parseInt(edadGatoIngresado)
			}

			nombreGatoIngresado=prompt("Ingrese el nombre de su gato");
			while(isNaN(nombreGatoIngresado)==false)
			{
				nombreGatoIngresado=prompt("El nombre del gato ingresado es incorrecta");
			}
		}
		else if(razaPajaroIngresado=="pajaro")
		{
			razaPajaroIngresado=prompt("Ingrese la raza del pajaro")
			while(isNaN(razaPajaroIngresado)==false)
			{
				razaPajaroIngresado=prompt("La raza del pajaro es incorrecta");
			}

			edadPajaroIngresado=prompt("Ingrese la edad de su pajaro entre 1 a 50 años");
			edadPajaroIngresado=parseInt(edadPajaroIngresado)
			while(isNaN(edadPajaroIngresado)==true || edadPajaroIngresado<1 || edadPajaroIngresado>50)
			{
				edadPajaroIngresado=prompt("La edad ingresada del pajaro es incorrecta");
				edadPajaroIngresado=parseInt(edadPajaroIngresado)
			}

			nombrePajaroIngresado=prompt("Ingrese el nombre de su pajaro");
			while(isNaN(nombrePajaroIngresado)==false)
			{
				nombrePajaroIngresado=prompt("El nombre del pajaro ingresado es incorrecta");
			}
		}
		else
		{
			razaOtroIngresado=prompt("Ingrese la raza del animal")
			while(isNaN(razaOtroIngresado)==false)
			{
				razaOtroIngresado=prompt("La raza del animal es incorrecta");
			}

			edadMascotaOtros=prompt("Ingrese la edad de su mascota entre 1 a 100 años");
			edadMascotaOtros=parseInt(edadMascotaOtros)
			while(isNaN(edadMascotaOtros)==true || edadMascotaOtros<1 || edadMascotaOtros>100)
			{
				edadMascotaOtros=prompt("La edad ingresada de su mascota es incorrecta");
				edadMascotaOtros=parseInt(edadMascotaOtros)
			}

			nombreOtroIngresado=prompt("Ingrese el nombre de su animal");
			while(isNaN(nombreOtroIngresado)==false)
			{
				nombreOtroIngresado=prompt("El nombre del animal ingresado es incorrecta");
			}
		}

		switch(razaGatoIngresado)
		{
			case "siames":
				contadorGatoSiames++;
			break;

			case "turco":
				contadorGatoTurco++;
			break;

			case "peterbald":
				contadorGatoPeterbald++;
			break;

			case "generico":
				contadorGatoGenerico++;
			break;
		}

		if(contadorGatoSiames>contadorGatoTurco && contadorGatoSiames>contadorGatoPeterbald && contadorGatoSiames>contadorGatoGenerico)
		{
			razaGatoMasAnimales="siames";
		}
		else if(contadorGatoTurco>contadorGatoPeterbald && contadorGatoTurco>contadorGatoGenerico)
		{
			razaGatoMasAnimales="turco";
		}
		else if(contadorGatoPeterbald>contadorGatoGenerico)
		{
			razaGatoMasAnimales="peterbald";
		}
		else
		{
			razaGatoMasAnimales="generico";
		}

		contador++;
	}
	
	if(flagPerro==0 || edadPerroIngresado>edadPerroMasViejo)
	{
		edadPerroMasViejo=edadPerroIngresado;
		nombrePerroMasViejo=nombrePerroIngresado;
		flagPerro=1;
	}
	if(flagGato==0 || edadGatoIngresado>edadGatoMasViejo)
	{
		edadGatoMasViejo=edadGatoIngresado;
		nombreGatoMasViejo=nombreGatoIngresado;
		flagGato=1;
	}
	if(flagPajaro==0 || edadPajaroIngresado>edadPajaroMasViejo)
	{
		edadPajaroMasViejo=edadPajaroIngresado;
		nombrePajaroMasViejo=nombrePajaroIngresado;
		flagPajaro=1;
	}
	if(flagOtro==0 || edadMascotaOtros>edadOtrosMasViejo)
	{
		edadOtrosMasViejo=edadMascotaOtros;
		nombreOtrosMasViejo=nombreOtroIngresado;
		flagOtro=1;
	}
	
	if(flagPerro==1)
	{
		alert("El nombre del perro mas viejo es "+nombrePerroMasViejo);
	}
	if(flagGato==1)
	{
		alert("El nombre del gato mas viejo es "+nombreGatoMasViejo);
	}
	if(flagPajaro==1)
	{
		alert("El nombre del pajaro mas viejo es "+edadPajaroMasViejo);
	}
	if(flagOtro==1)
	{
		alert("El nombre de la mascota mas vieja es "+edadOtrosMasViejo);
	}
	

	alert("La raza con mas gatos es "+razaGatoMasAnimales);
	*/