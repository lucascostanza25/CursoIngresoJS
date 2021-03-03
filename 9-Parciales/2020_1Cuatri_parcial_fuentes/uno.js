/*
Apellido y nombre: Costanza Lucas

Debemos realizar la carga de 5(cinco) productos de prevención de contagio, <br>
de cada una debo obtener los siguientes datos: <br>
el tipo (validar "barbijo" , "jabón" o "alcohol") , <br>
el precio (validar entre 100 y 300),<br>
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
la Marca y el fabricante. <br>
Se debe Informar al usuario lo siguiente:<br>

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante<br>
b) Del tipo con mas unidades, el promedio por compra <br>
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	//Varaibles iniciales
	let tipoIngresado;
	let precioIngresado;
	let cantidadIngresada;
	let marcaIngresada;
	//Contador
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let contador;
	//Acumuladores
	let acumuladorBarbijo;
	let acumuladorJabon;
	let acumuladorAlcohol;
	//Marcas y cantidades
	let fabricanteAlcohol;
	let cantidadUnidadesAlcohol;
	let marcaMasBarataAlcohol;
	//El producto con mas unidades
	let tipoMasUnidades;
	//Promedio
	let promedio;
	//Bandera
	let flagPrimerAlcohol;
	//Precio mas bajo
	let precioBajoAlcohol;
	//Iinicialización
	contador=0;
	contadorBarbijo=0;
	contadorJabon=0;
	contadorAlcohol=0;
	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;
	flagPrimerAlcohol=0;

	while(contador<3)
	{
		tipoIngresado=prompt("Ingrese tipo");
		while(isNaN(tipoIngresado)==false ||  tipoIngresado!="barbijo" && tipoIngresado!="jabón" && tipoIngresado!="alcohol")
		{
			tipoIngresado=prompt("EL tipo ingresado es invalido. Por favor re ingreselo");
		}

		precioIngresado=prompt("Ingrese un precio entre 100 y 300");
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado=prompt("El precio ingresado es invalido")
			precioIngresado=parseInt(precioIngresado);
		}

		cantidadIngresada=prompt("Ingrese una cantida");
		cantidadIngresada=parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada)==true || cantidadIngresada<0 || cantidadIngresada>1000)
		{
			cantidadIngresada=prompt("La cantidad ingresado es invalida")
			cantidadIngresada=parseInt(cantidadIngresada);
		}

		marcaIngresada=prompt("Ingrese la marca");
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada=prompt("La marca ingresada es invalida. Por favor re ingresela");
		}

		fabricanteIngresado=prompt("Ingrese fabricante");
		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado=prompt("El fabricante ingresado es invalido. Por favor re ingreselo");
		}
		
		/*a) Del más barato de los alcohol, la cantidad de unidades y el fabricante<br>*/
		if(tipoIngresado=="alcohol" && precioIngresado<precioBajoAlcohol || flagPrimerAlcohol==0)
		{
			precioBajoAlcohol=precioIngresado;
			cantidadUnidadesAlcohol=cantidadIngresada;
			marcaMasBarataAlcohol=marcaIngresada;
			flagPrimerAlcohol=1;
		}

		//b) Del tipo con mas unidades, el promedio por compra <br>
		//B) Dividir cada caso para cada producto y contar cuantes veces introduje el alcohol (contadorAlcohol)
		switch(tipoIngresado)
		{
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol=acumuladorAlcohol+cantidadIngresada;
			break;
			case "jabón":
				contadorJabon++;
				acumuladorJabon=acumuladorJabon+cantidadIngresada;
			break;
			case "barbijo":
				contadorBarbijo++;
				acumuladorBarbijo=acumuladorBarbijo+cantidadIngresada;
			break;
		}
		contador++;
	}
	//B) Sacar el promedio de cada producto.
	/* 
	Para sacar el promedio de productos por separado primero hay que "aislar" a uno y de a poco ir separandolo de los demás
	En este caso se pregunta si la cantidad de alcohol es mas grande que la de barbijo y mas grande que la de jabón
	*/
	if(acumuladorAlcohol>acumuladorBarbijo && acumuladorAlcohol>acumuladorJabon)
	{
		tipoMasUnidades="Alcohol";
		promedio=acumuladorAlcohol/contadorAlcohol;
	}
	else if(acumuladorBarbijo>acumuladorJabon)
	{
		tipoMasUnidades="Barbijo";
		promedio=acumuladorBarbijo/contadorBarbijo;
	}
	else
	{
		tipoMasUnidades="Jabón";
		promedio=acumuladorJabon/contadorJabon;
	}
	//A) Precio mas bajo de alcohol, fabricante y cantidad:
	alert("El precio mas bajo del alcohol es: $"+precioBajoAlcohol+"<br>");
	//alert("El fabricante de alcohol es: "+fabricanteAlcohol+"<br>");
	alert("La cantidad de unidades de alcohol es: "+cantidadUnidadesAlcohol+"<br>");
	//B)
	alert("El tipo con mas unidades es: "+tipoMasUnidades+" y su promedio es: "+promedio);
	//c) Cuántas unidades de jabones hay en total
	alert("Las unidades de jabón es: "+acumuladorJabon);
}
