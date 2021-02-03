/*
Costanza Lucas
Ejercicio 5 (bis)
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;
	let apellido;
	nombre=document.getElementById('txtIdNombre').value;
	apellido=prompt("Introduzca su apellido");
	edad=document.getElementById('txtIdEdad').value;
	alert(apellido+", usted se llama "+nombre+" y tiene "+edad+" años ");
}

//Terminado