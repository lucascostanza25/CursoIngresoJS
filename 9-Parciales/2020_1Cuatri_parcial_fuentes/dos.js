/*
>Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento") +
Cantidad de bolsas, +
Precio por bolsa (más de cero ), +

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
  a) El importe total a pagar , bruto sin descuento y...
  b) el importe total a pagar con descuento(solo si corresponde)
  d) Informar el tipo con mas cantidad de bolsas.		
  f) El tipo mas caro
*/

function mostrar()
{
	let tipoIngresado;
	let precioIngresado;
  let precioArena;
  let precioCal;
  let precioCemento;
	let cantidadIngresada;
  let pregunta;
  let descuentoDiez;
  let descuentoTreinta;
  let masUnidades;
  let productoMasCaro;
  //Contador
  let contadorArena;
  let contadorCal;
  let contadorCemento;
  //Acumuladores
  let acumuladorArena;
  let acumuladorCal;
  let acumuladorCemento;
  //Inicialización
  contadorArena=0;
  contadorCal=0;
  contadorCemento=0;
  acumuladorArena=0;
  acumuladorCal=0;
  acumuladorCemento=0;
  descuentoDiez=15;
  descuentoTreinta=30;
  pregunta="si";

  while(pregunta=='si')
	{
		tipoIngresado=prompt("Ingrese tipo");
		while(isNaN(tipoIngresado)==false ||  tipoIngresado!="arena" && tipoIngresado!="cal" && tipoIngresado!="cemento")
		{
			tipoIngresado=prompt("EL tipo ingresado es invalido. Por favor re ingreselo");
		}

		precioIngresado=prompt("Ingrese un precio mayor a 0");
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)==true || precioIngresado<0)
		{
			precioIngresado=prompt("El precio ingresado es invalido")
			precioIngresado=parseInt(precioIngresado);
		}

		cantidadIngresada=prompt("Ingrese una cantidad de bolsas");
		cantidadIngresada=parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada)==true || cantidadIngresada<0)
		{
			cantidadIngresada=prompt("La cantidad ingresado es invalida")
			cantidadIngresada=parseInt(cantidadIngresada);
		}
    pregunta=prompt("¿Quiere continuar? si / no");
  }

  switch(precioIngresado)
  {
    case "arena":
      precioArena=precioIngresado
    break

    case "cal":
      precioCal=precioIngresado;
    break;

    case "cemento":
      precioCemento=precioIngresado;
    break;
  }

  switch(tipoIngresado)
  {
    case "arena":
      contadorArena++;
      acumuladorArena=acumuladorArena+cantidadIngresada;
    break;

    case "cal":
      contadorCal++;
      acumuladorCal=acumuladorCal+cantidadIngresada;
    break;

    case "cemento":
      contadorCemento++;
      acumuladorCemento=acumuladorCemento+cantidadIngresada;
    break;
  }
  
  if(cantidadIngresada>10 && cantidadIngresada<30)
  {
    precioIngresado=precioIngresado-precioIngresado*descuentoDiez/100;
  }
  else if(cantidadIngresada>30)
  {
    precioIngresado=precioIngresado-precioIngresado*descuentoTreinta/100;
  }
  else
  {
    precioIngresado=precioIngresado;
  }
  alert("El precio de "+cantidadIngresada+" bolsas son $"+precioIngresado+" pesos");

  if(acumuladorCemento>acumuladorArena && acumuladorCemento>acumuladorCal)
  {
    masUnidades="Cemento";
  }
  else if(acumuladorArena>acumuladorCal)
  {
    masUnidades="Arena";
  }
  else
  {
    masUnidades="Cal";
  }
  alert("El tipo con mas unidades es: "+masUnidades);

  if(precioArena>precioCal && precioArena>precioCemento)
  {
    productoMasCaro="Arena";
  }
  else if(precioCal>precioCemento)
  {
    productoMasCaro="Cal";
  }
  else
  {
    productoMasCaro="Cemento";
  }
  alert("El producto mas caro es: "+productoMasCaro);
}
