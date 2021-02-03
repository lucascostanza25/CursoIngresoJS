/* 
Costanza Lucas
Ejercicio 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	nombre=prompt("Ingrese su nombre");
	document.getElementById('txtIdNombre').value="¡Hola "+nombre+"!";	
}

//Terminado