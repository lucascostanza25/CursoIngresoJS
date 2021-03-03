
function mostrar()
{
	//Variables iniciales
	let productoIngresado;
	let precioProducto;
	let cantidadProducto;
	let fabricanteProducto;
	let flagJabon;
	let flagProductoMasUnidades;
	let productoMasUnidades;
	let jabonMasCaro;
	let cantidadJabonCaro;
	let fabricanteJabonCaro;
	let promedio;
	//Contadores
	let contador;
	let contadorJabon; 
	let contadorBarbijo;
	let contadorAlcohol;
	let contadorMasCompra;
	//Acumuladores
	let acumuladorJabon;
	let acumuladorBarbijo;
	let acumuladorAlcohol;
	let acumuladorMasCompra;
	//Inicialización
	contador=0;
	contadorJabon=0;
	contadorBarbijo=0;
	contadorAlcohol=0;
	acumuladorJabon=0;//Se usan acumuladores para acumular la cantidad de productos.
	acumuladorBarbijo=0;
	acumuladorAlcohol=0;
	flagJabon=0;
	jabonMasCaro=0;
	flagProductoMasUnidades=0;
	cantidadJabonCaro=0;
	productoMasUnidade=0;
	acumuladorMasCompra=0;
	contadorMasCompra=0;

	while(contador<2)
	{
		productoIngresado=prompt("Ingrese un producto");
		while(isNaN(productoIngresado)==false || productoIngresado!="barbijo" && productoIngresado!="jabón" && productoIngresado!="alcohol")
		{
			productoIngresado=prompt("El producto ingresado es incorrecto");
		}
		
		precioProducto=prompt("Ingrese el precio del producto de 100 a 300");
		precioProducto=parseInt(precioProducto);
		while(isNaN(precioProducto)==true || precioProducto<100 || precioProducto>300)  
		{
			precioProducto=prompt("El precio del producto es incorrecto")
			precioProducto=parseInt(precioProducto);
		}

		cantidadProducto=prompt("Ingrese una cantidad de producto mayor a 0 y menor a 1000")
		cantidadProducto=parseInt(cantidadProducto);
		while(isNaN(cantidadProducto)==true || cantidadProducto<0 || cantidadProducto>1000)
		{
			cantidadProducto=prompt("La cantidad de productos es incorrecta")
			cantidadProducto=parseInt(cantidadProducto);
		}

		fabricanteProducto=prompt("Ingrese el fabricante del producto")
		while(isNaN(fabricanteProducto)==false)
		{
			fabricanteProducto=prompt("El fabricante es incorrecto");
		}

		switch(productoIngresado)
		{
			case "barbijo":
				contadorBarbijo++;
				acumuladorBarbijo+=cantidadProducto;
			break;

			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol+=cantidadProducto;
			break;

			case "jabón":
				contadorJabon++;
				acumuladorJabon+=cantidadProducto;
			break;
		}

		if(flagJabon==0 || jabonMasCaro<precioProducto)
		{
			jabonMasCaro=precioProducto;
			cantidadJabonCaro=cantidadProducto;
			fabricanteJabonCaro=fabricanteProducto;
			flagJabon=1;
		}

		if(flagProductoMasUnidades==0 || productoMasUnidades<cantidadProducto)
		{
			contadorMasCompra++;
			productoMasUnidades=cantidadProducto;
			acumuladorMasCompra+=precioProducto;
			promedio=acumuladorMasCompra/contadorMasCompra;
			flagProductoMasUnidades=1;
		}
		
		contador++;
	}
	alert("El jabón mas caro es "+jabonMasCaro+", la cantidad de unidades es "+cantidadJabonCaro+" y el fabricante es "+fabricanteJabonCaro);
	alert("La cantidad de barbijos comprados en total es "+acumuladorBarbijo);
	alert("El promedio de venta del producto que mas se compra es: "+promedio);
}
