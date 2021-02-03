/*
Costanza Lucas
Ejercicio 3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre; //let es la forma moderna de introducir variables
	//Utilización estandar de ID
	nombre=document.getElementById('txtIdNombre').value;
	alert("¡Hola "+nombre+"!");
	//alert(nombre);
}

/* var nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	alert("¡Hola "+nombreIngresado+"!"); */

//Terminado