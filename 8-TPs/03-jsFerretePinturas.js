/*
Costanza Lucas
TP Nro 3
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaFahrenheit;
    let resultadoCelcius;

    temperaturaFahrenheit=parseInt(document.getElementById('txtIdTemperatura').value);
    resultadoCelcius=(temperaturaFahrenheit-32)/1.8;

    alert(temperaturaFahrenheit+" grados Fahrenheit son "+resultadoCelcius+" grados centígrados");
}

function CentigradosFahrenheit () 
{
	let temperaturaCelcius2;
    let resultadoFahrenheit;

    temperaturaCelcius2=parseInt(document.getElementById('txtIdTemperatura').value);
    resultadoFahrenheit=(temperaturaCelcius2*1.8)+32;

    alert(temperaturaCelcius2+" grados centígrados son "+resultadoFahrenheit+" grados Fahrenheit");
}
