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
	let numeroUnoR;
	let numeroDosR;
	let resultadoR;

	numeroUnoR=document.getElementById('txtIdNumeroUno').value;
	numeroUnoR=parseInt(numeroUnoR);
	numeroDosR=document.getElementById('txtIdNumeroDos').value;
	numeroDosR=parseInt(numeroDosR);

	resultadoR=numeroUnoR-numeroDosR;
	alert("El resultado del a resta es "+resultadoR);
}

function multiplicar()
{ 
	let numeroUnoM;
	let numeroDosM;
	let resultadoM;

	numeroUnoM=document.getElementById('txtIdNumeroUno').value;
	numeroUnoM=parseInt(numeroUnoM);
	numeroDosM=document.getElementById('txtIdNumeroDos').value;
	numeroDosM=parseInt(numeroDosM);

	resultadoM=numeroUnoM*numeroDosM;
	alert("El resultado de la multiplicación es "+resultadoM);
}

function dividir()
{
	let numeroUnoD;
	let numeroDosD;
	let resultadoD;

	numeroUnoD=document.getElementById('txtIdNumeroUno').value;
	numeroUnoD=parseInt(numeroUnoD);
	numeroDosD=document.getElementById('txtIdNumeroDos').value;
	numeroDosD=parseInt(numeroDosD);

	resultadoD=numeroUnoD/numeroDosD;
	alert("El resultado de la división es "+resultadoD);
}

