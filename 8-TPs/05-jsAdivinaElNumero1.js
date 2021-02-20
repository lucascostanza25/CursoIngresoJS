/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
  numeroSecreto=Math.round(Math.random() * 100) + 1;
  //numeroFaltante=numeroSecreto-numeroIngresado;
  alert("¡Comienza el juego!")
}

function verificar()
{
  let numeroIngresado;
  let contadorIntentos=0;

  numeroIngresado=parseInt(document.getElementById('txtIdNumero').value);
  
  //Falta contador de intentos
  
  if(numeroIngresado!=numeroSecreto)
  {
    contadorIntentos=contadorIntentos+1;
    if(numeroIngresado==numeroSecreto)
    {
      alert("¡Ganaste!");    
    }
    else if(numeroIngresado>numeroSecreto)
    {
      alert("Te pasate");
    }
    else
    {
      alert("Te quedaste corto");
    }
    alert(contadorIntentos);
  }
  /*if(numeroIngresado==numeroSecreto)
  {
    alert("¡Ganaste!"+contadorIntentos);
  }
  else
  {
    if(numeroIngresado>numeroSecreto)
    {
      alert("Te pasate");
    }
    else
    {
      alert("Te quedaste corto");
    }
  }*/
}