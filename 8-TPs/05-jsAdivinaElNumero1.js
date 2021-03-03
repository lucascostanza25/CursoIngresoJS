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
  let pregunta="si";

  numeroIngresado=parseInt(document.getElementById('txtIdNumero').value);
  
  //Falta contador de intentos

  
  while(pregunta=='si')
  {
    contadorIntentos++;
    if(numeroIngresado!=numeroSecreto)
    {
      alert("No!");
    }
    else if(numeroIngresado==numeroSecreto)
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
    pregunta=prompt("si / no");
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