/*1.	Para el departamento de facturación:
Costanza Lucas
TP N°1
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultadoSuma;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioUno=parseFloat(precioUno);

    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioDos=parseFloat(precioDos);

    precioTres=document.getElementById('txtIdPrecioTres').value;
    precioTres=parseFloat(precioTres);

    resultadoSuma=precioUno+precioDos+precioTres;
    alert("El resultado de la suma es $"+resultadoSuma);
}
function Promedio () 
{
    let precioUnoP;
    let precioDosP;
    let precioTresP;
    let suma;
    let promedio;
    const prom=3; //Se puede agregar una constante

    precioUnoP=document.getElementById('txtIdPrecioUno').value;
    precioUnoP=parseFloat(precioUnoP);

    precioDosP=document.getElementById('txtIdPrecioDos').value;
    precioDosP=parseFloat(precioDosP);

    precioTresP=document.getElementById('txtIdPrecioTres').value;
    precioTresP=parseFloat(precioTresP);
    //Hacer todos los pasos por separado
    suma=precioUnoP+precioDosP+precioTresP;

    promedio=suma/prom;
    //Aplicar toFixed a promedio siempre
    promedio=promedio.toFixed(2);
    alert("El resultado del promedio es "+promedio);//.toFixed(2)
}
function PrecioFinal () 
{
    let precioUnoI;
    let precioDosI;
    let precioTresI;
    let precioSumado;
    let resultadoIVA;
    const PRECIO_IVA=0.21;

    precioUnoI=document.getElementById('txtIdPrecioUno').value;
    precioUnoI=parseFloat(precioUnoI);

    precioDosI=document.getElementById('txtIdPrecioDos').value;
    precioDosI=parseFloat(precioDosI);

    precioTresI=document.getElementById('txtIdPrecioTres').value;
    precioTresI=parseFloat(precioTresI);

    precioSumado=precioUnoI+precioDosI+precioTresI;

    resultadoIVA=precioSumado+precioSumado*PRECIO_IVA;

    alert("El precio final es "+resultadoIVA);
}