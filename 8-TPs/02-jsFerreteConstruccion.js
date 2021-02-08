/*
Costanza Lucas
TP Nro 2
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoRectangulo;
    let anchoRectangulo;
    let perimetroRectangulo;
    let resultadoRectangulo;
    const ALAMBRE=3;

    largoRectangulo=parseFloat(document.getElementById('txtIdLargo').value);
    anchoRectangulo=parseFloat(document.getElementById('txtIdAncho').value);

    perimetroRectangulo=(largoRectangulo+anchoRectangulo)*2;
    resultadoRectangulo=perimetroRectangulo*ALAMBRE;
    alert("La cantidad de alambre a comprar son "+resultadoRectangulo+" metros");
}
function Circulo () 
{
	let perimetroCirculo;
    let radioCirculo;
    const PI=3.14 //math.pi
    const ALAMBRE_CIRCULO=3;
    
    radioCirculo=parseFloat(document.getElementById('txtIdRadio').value);
    perimetroCirculo=2*PI*radioCirculo;

    alert("La cantidad de alambre a comprar para el terreno círcular es "+perimetroCirculo*ALAMBRE_CIRCULO+" metros");
}
function Materiales () 
{
	let largoMateriales;
    let anchoMateriales;
    let areaMateriales;
    let bolsasCemento;
    let bolsasCal;
    const BOLSAS_DE_CEMENTO=2;
    const BOLSAS_DE_CAL=3;

    largoMateriales=parseFloat(document.getElementById('txtIdLargo').value);
    anchoMateriales=parseFloat(document.getElementById('txtIdAncho').value);
    areaMateriales=largoMateriales*anchoMateriales;

    bolsasCemento=areaMateriales*BOLSAS_DE_CEMENTO;
    bolsasCal=areaMateriales*BOLSAS_DE_CAL;

    alert("La cantidad de bolsas a comprar son "+bolsasCemento+" de cemento"+" y "+bolsasCal+" de cal");
}