/*
Costanza Lucas
Ejercicio 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;
	let aumento;
	//Recoger valor del sueldo de la caja de texto
	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);
	//Aumentar el sueldo un 10%
	aumento=sueldo*10/100;
	//Sumer el sueldo base con el aumento
	resultado=sueldo+aumento;
	//Imprimir el resultado del sueldo aumentado en el cuadro de texto resultado
	document.getElementById('txtIdResultado').value=resultado;
}

//Terminado