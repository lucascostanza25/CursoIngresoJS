/* 
Costanza Lucas
Ejercicio Switch 9
*/
function mostrar()
{
	let precioBase=15000;
	let precioFinal;
	let porcentaje;
	/*let aumento=0;
	let descuento=0;*/
	let estacionIngresada;
	let destinoIngresado;
	
	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case "Invierno":
			if(destinoIngresado=="Bariloche")
			{
				porcentaje=20;//Aumento
			}
			else if(destinoIngresado=="Mar del plata")
			{
				porcentaje=-20;//Descuento
			}
			else
			{
				porcentaje=-10;
			}
		break;
		
		case "Verano":
			if(destinoIngresado=="Bariloche")
			{
				porcentaje=-20;
			}
			else if(destinoIngresado=="Mar del plata")
			{
				porcentaje=20;
			}
			else
			{
				porcentaje=10;
			}
		break;

		case "Otoño":
		case "Primavera":
			if(destinoIngresado=="Bariloche")
			{
				porcentaje=10;
			}
			else if(destinoIngresado=="Cordoba")
			{
				porcentaje=0;
			}
			else
			{
				porcentaje=10;
			}
	}
	
	precioFinal=precioBase+precioBase*porcentaje/100;
	
	/*if(aumento != 0)
	{
		precioFinal=precioBase+precioBase*aumento/100;
	}
	else if(descuento != 0)
	{
		precioFinal=precioBase-precioBase*descuento/100;
	}
	No usar esto*/ 
	
	alert("¡El precio final de un viaje a "+destinoIngresado+" en "+estacionIngresada+" es de: $"+precioFinal+"!");
}