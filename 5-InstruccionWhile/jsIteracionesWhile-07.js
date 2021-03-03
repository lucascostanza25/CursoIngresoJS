/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
Costanza Lucas
Ejercicio While 7
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta='si';

	//El código se ejecuta por primera vez porque ya esta declarada la variable como "si"

	while(respuesta=='si')
	{
		numeroIngresado=prompt("Ingrese un numero");
		acumulador=acumulador+numeroIngresado;
		contador++;
		respuesta=prompt("Si quieren puede ingresar otro numero / si o no"); //Se vuelve a pisar la variable respuesta
		//Si se pone "si", se vuelve a ejecutar el código porque la variable respuesta sigue valiendo lo mismo
		//Si se pone "no" u otra cosa el código se detiene porque la variable ya no es "si"
	}

	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;
}