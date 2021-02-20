/*
Costanza Lucas
Ejercicio While 5
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo=prompt("Ingrese su sexo: F o M");

	while(sexo!="F" && sexo!="M") //while(!(sexo=="F" || sexo=="M"))
	{
		alert("El sexo ingreado es incorrecto!");
		sexo=prompt("Reingrese su sexo");
	}
	document.getElementById('txtIdSexo').value="El sexo ingresado es "+sexo;
}