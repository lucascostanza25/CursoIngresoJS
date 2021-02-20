/*
Costanza Lucas
Ejercicio While 3
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada=prompt("Ingrese la contraseña");

	while(claveIngresada!="utn750")
	{
		alert("Contraseña incorrecta");
		claveIngresada=prompt("Ingrese la contraseña");
	}
	alert("¡Bienvenido!");
}
