
function mostrar()
{
  let tipoProductoIngresado;
  let cantidadBolsasIngresada;
  let precioBolsasIngresado;
  let precioBolsasIngresadoDos;
  let precioBolsasIngresadoUno;
  let descuentoUno;
  let descuentoDos;
  let pregunta;
  let flagProductoMasUnidades;
  let productoMasUnidades;
  let flagProductoMasCaro;
  let productoMasCaro;
  let cantidadDeBolsasMasUnidades;
  let precioProductoMasCaro;
  //Contadores
  let contadorBolsasArena;
  let contadorBolsasCal;
  let contadorBolsasCemento;
  //Acumuludares
  let acumuladorArena;
  let acumuladorCal;
  let acumuladorCemento;
  //Inicialización
  descuentoUno=15/100;
  descuentoDos=25/100;
  contadorBolsasArena=0;
  contadorBolsasCal=0;
  contadorBolsasCemento=0;
  acumuladorArena=0;
  acumuladorCal=0;
  acumuladorCemento=0;
  pregunta="si";
  flagProductoMasUnidades=0;
  productoMasUnidades=0;
  flagProductoMasCaro=0;
  productoMasCaro=0;
  cantidadDeBolsasMasUnidades=0;
  precioProductoMasCaro=0;

  while(pregunta=='si')
  {
    tipoProductoIngresado=prompt("Ingrese el tipo de producto");
    while(isNaN(tipoProductoIngresado)==false || tipoProductoIngresado!="arena" && tipoProductoIngresado!="cal" && tipoProductoIngresado!="cemento")
    {
      tipoProductoIngresado=prompt("El producto ingresado es incorrecto");
    }

    cantidadBolsasIngresada=prompt("Ingrese la cantidad de bolsas");
    cantidadBolsasIngresada=parseInt(cantidadBolsasIngresada);
    while(isNaN(cantidadBolsasIngresada)==true)
    {
      cantidadBolsasIngresada=prompt("La cantidad de bolsas ingresadas es incorrecta");
      cantidadBolsasIngresada=parseInt(cantidadBolsasIngresada);
    }

    precioBolsasIngresado=prompt("Ingrese el precio de las bolsas");
    precioBolsasIngresado=parseInt(precioBolsasIngresado);
    while(isNaN(precioBolsasIngresado)==true)
    {
      precioBolsasIngresado=prompt("el precio de las bolsas ingresadas es incorrecto");
      precioBolsasIngresado=parseInt(precioBolsasIngresado);
    }

    switch(tipoProductoIngresado)
    { 
      case "arena":
        contadorBolsasArena++;
        acumuladorArena+=cantidadBolsasIngresada;
      break;

      case "cal":
        contadorBolsasCal++;
        acumuladorCal+=cantidadBolsasIngresada;
      break;

      case "cemento":
        contadorBolsasCemento++;
        contadorBolsasCemento+=cantidadBolsasIngresada;
      break;
    }

    if(cantidadBolsasIngresada>10 && cantidadBolsasIngresada<30)
    {
      precioBolsasIngresadoUno=precioBolsasIngresado-precioBolsasIngresado*descuentoUno;
    }
    else if(cantidadBolsasIngresada>30)
    {
      precioBolsasIngresadoDos=precioBolsasIngresado-precioBolsasIngresado*descuentoDos;
    }
    else
    {
      precioBolsasIngresado=precioBolsasIngresado;
    }

    if(flagProductoMasUnidades==0 || cantidadBolsasIngresada>cantidadDeBolsasMasUnidades)
    {
      productoMasUnidades=tipoProductoIngresado;
      flagProductoMasUnidades=1;
    }

    if(flagProductoMasCaro==0 || precioProductoMasCaro<precioBolsasIngresado)
    {
      precioProductoMasCaro=precioBolsasIngresado;
      productoMasCaro=tipoProductoIngresado;
      flagProductoMasCaro=1;
    }
    pregunta=prompt("¿Desea ingresar otro producto? si / no");
  }
    
  
  document.write("La compra de entre 10 a 30 bolsas cuesta "+precioBolsasIngresadoUno+"<br>");
  document.write("La compra de mas de 30 bolsas cuesta "+precioBolsasIngresadoDos+"<br>");
  document.write("La compra de menos de 10 bolsas cuesta "+precioBolsasIngresado+"<br>");
  document.write("El producto con mas unidades es "+productoMasUnidades+"<br>");
  document.write("El producto mas caro es "+productoMasCaro+"<br>");
  
}

/* 
1. El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera. +
B. Cantidad total de mujeres que cursan la carrera de programación +
C. Cantidad de alumnos no binarios. +
D. Promedio de notas de los alumnos finalizantes. +
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología. +
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.) +
G. ¿Cuál es la carrera que tiene más alumnos? +
*/
/*
  let nombreAlumno;
  let carreraIngresada;
  let estadoCarrera;
  let sexoIngresado;
  let edadIngresada;
  let notaIngresada;
  let pregunta;
  let promedioNotas;
  let flagAlumnoViejo;
  let nombreAlumnoViejo;
  let edadAlumnoViejo;
  let sexoAlumnoViejo;
  let carreraMasAlumnos;
  //Contadores
  let contadorAlumnoProgramacion;
  let contadorAlumnoPsic;
  let contadorAlumnoDG;
  let contadorAlumnoMujer;
  let contadorAlumnosNoB;
  let contadorAlumnosEgresados;
  //Acumulador
  let acumuladorNotaAlumnosEgresados;
  //Inicializacion
  pregunta="si";
  contadorAlumnoProgramacion=0;
  contadorAlumnoDG=0;
  contadorAlumnoPsic=0;
  contadorAlumnoMujer=0;
  contadorAlumnosNoB=0;
  contadorAlumnosEgresados=0;
  acumuladorNotaAlumnosEgresados=0;
  flagAlumnoViejo=0;

  while(pregunta=='si')
  {
    nombreAlumno=prompt("Ingrese el nombre del alumno");
    while(isNaN(nombreAlumno)==false)
    {
      nombreAlumno=prompt("El nombre ingresado es incorrecto, reingreselo");
    }

    sexoIngresado=prompt("Ingrese el sexo del alumno");
    while(isNaN(sexoIngresado)==false || sexoIngresado!="m" && sexoIngresado!="f" && sexoIngresado!="no binario")
    {
      sexoIngresado=prompt("El sexo ingresado es incorrecto");
    }

    edadIngresada=prompt("Ingrese la edad del alumno");
    edadIngresada=parseInt(edadIngresada);
    while(isNaN(edadIngresada)==true || edadIngresada<18)
    {
      edadIngresada=prompt("La edad ingresada es incorrecta");
      edadIngresada=parseInt(edadIngresada);
    }

    carreraIngresada=prompt("Ingrese la carrera");
    while(isNaN(carreraIngresada)==false || carreraIngresada!="programacion" && carreraIngresada!="psicologia" && carreraIngresada!="diseño grafico")
    {
      carreraIngresada=prompt("La carrera ingresada es incorrecta, reingresela");
    }

    estadoCarrera=prompt("Ingrese el estado de la carrera");
    while(isNaN(estadoCarrera)==false || estadoCarrera!="en curso" && estadoCarrera!="abandono" && estadoCarrera!="finalizado")
    {
      estadoCarrera=prompt("El estado de la carrera es incorrecto");
    }

    notaIngresada=prompt("Ingrese la nota del alumno");
    notaIngresada=parseFloat(notaIngresada);
    while(isNaN(notaIngresada)==true || notaIngresada<0 || notaIngresada>10)
    {
      notaIngresada=prompt("La nota inresada es incorrecta");
      notaIngresada=parseFloat(notaIngresada);
    }

    switch(carreraIngresada)
    {
      case "programacion":
        if(estadoCarrera=='en curso')
        {
          contadorAlumnoProgramacion++;
          
          if(sexoIngresado=='f')
          {
          contadorAlumnoMujer++;
          }
          else if(sexoIngresado=='no binario')
          {
          contadorAlumnosNoB++;
          }
        } 
        else if(estadoCarrera=='finalizado')
        {
          contadorAlumnosEgresados++;
          acumuladorNotaAlumnosEgresados+=notaIngresada;
        }     
      break;

      case "psicologia":
        if(estadoCarrera=='en curso')
        {
          contadorAlumnoPsic++;

          if(sexoIngresado=="no binario")
          {
          contadorAlumnosNoB++;
          }
        }  
        else if(estadoCarrera=='finalizado')
        {
          contadorAlumnosEgresados++;
          acumuladorNotaAlumnosEgresados+=notaIngresada;
        }     
      break;

      case "diseño grafico":
        if(estadoCarrera=='en curso')
        {
          if(sexoIngresado=='no binario')
          {
          contadorAlumnosNoB++;
          }  
          else
          {
          contadorAlumnoDG++;
          }
        }  
        else if(estadoCarrera=='finalizado')
        {
          contadorAlumnosEgresados++;
          acumuladorNotaAlumnosEgresados+=notaIngresada;
        }     
      break;
    }
    
    if(flagAlumnoViejo==0 || edadIngresada>edadAlumnoViejo && carreraIngresada=='psicologia' && estadoCarrera=="en curso")
    {
      nombreAlumnoViejo=nombreAlumno;
      edadAlumnoViejo=edadIngresada;
      sexoAlumnoViejo=sexoIngresado;
      flagAlumnoViejo=1;
    }
    
    if(contadorAlumnoProgramacion>contadorAlumnoPsic && contadorAlumnoProgramacion>contadorAlumnoDG)
    {
      carreraMasAlumnos="programación";
    }
    else if(contadorAlumnoPsic>contadorAlumnoDG)
    {
      carreraMasAlumnos="psicología";
    }
    else
    {
      carreraMasAlumnos="diseño gráfico";
    }

    promedioNotas=acumuladorNotaAlumnosEgresados/contadorAlumnosEgresados;
    pregunta=prompt("¿Desea ingresar otro alumno? si / no");
  }

  
  document.write("La cantidad de alumnos en programación es "+contadorAlumnoProgramacion+"<br>");
  document.write("La cantidad de alumnas en progrmación son "+contadorAlumnoMujer+"<br>");
  document.write("La cantidad de alumnos en psicología es "+contadorAlumnoPsic+"<br>");
  document.write("La cantidad de alumnos en diseño gráfico es "+contadorAlumnoDG+"<br>");
  document.write("La cantidad de alumnos no binarios es "+contadorAlumnosNoB+"<br>");
  document.write("El promedio de notas de los alumnos egresados es "+promedioNotas+"<br>");
  document.write("El alumno mas viejo en la carrera de psicología es "+nombreAlumnoViejo+" con "+edadAlumnoViejo+" años y es "+sexoAlumnoViejo+"<br>");
  document.write("La carrera con mas alumnos es "+carreraMasAlumnos+"<br>");
  */