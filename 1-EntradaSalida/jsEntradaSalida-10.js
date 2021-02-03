/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importeInicial;
	let descuento;
	let resultado;

	importeInicial=document.getElementById('txtIdImporte').value;
	importeInicial=parseInt(importeInicial);

	descuento=importeInicial*25/100;

	resultado=importeInicial-descuento;

	document.getElementById('txtIdResultado').value=resultado;
}
