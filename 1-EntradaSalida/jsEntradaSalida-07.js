/*
Costanza Lucas
Ejercicio 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultado;
	
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;
	alert("El resultado de la suma es "+resultado);
}

function restar()
{
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno-numeroDos;
	alert("El resultado del a resta es "+resultado);
}

function multiplicar()
{ 
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno*numeroDos;
	alert("El resultado de la multiplicación es "+resultado);
}

function dividir()
{
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno/numeroDos;
	alert("El resultado de la división es "+resultado);
}

