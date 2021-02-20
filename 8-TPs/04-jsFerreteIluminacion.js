/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/*
Costanza Lucas
TP Ferrete Iluminacion solo con SWITCH
Division 1A
*/
function CalcularPrecio () 
{
 	let cantidadLamparitas;
    let precioFinalLamparitas;
    let mensaje;
    let precioLamparitas=35;
    let marca;
    let descuento;

    cantidadLamparitas=parseInt(document.getElementById('txtIdCantidad').value);
    precioFinalLamparitas=cantidadLamparitas*precioLamparitas;

    marca=document.getElementById('Marca').value;

    mensaje="El precio de las lamparitas es de $";

    if(cantidadLamparitas==5)
    {
        switch(marca)
        {
            case "ArgentinaLuz":
                descuento=40;
            break;
            default:
                descuento=30;
            break;
        }
    }
    else if(cantidadLamparitas==4)
    {
        switch(marca)
        {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                descuento=25;
            break;
            default:
                descuento=20;
            break;
        }
    }
    else if(cantidadLamparitas==3)
    {
        switch(marca)
        {
            case "ArgentinaLuz":
                descuento=15;
            break;
            case "FelipeLamparas":
                descuento=10;
            break;
            default:
                descuento=5;
            break;
        }
    }
    else if(cantidadLamparitas>5)
    {
        descuento=50;
    }
    else
    {
        descuento=0;
    }
    
    cantidadLamparitas=precioFinalLamparitas-precioFinalLamparitas*descuento/100;
    document.getElementById('txtIdprecioDescuento').value=mensaje + cantidadLamparitas;
    
    //SWITCH con IF
    /*switch(cantidadLamparitas)
    {
        case 5:
            if(marca=="ArgentinaLuz")
            {
                descuento=40;
            }
            else
            {
                descuento=30;
            }
        break;
        
        case 4:
            if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
            {
                descuento=25;
            }
            else
            {
                descuento=20;
            }
        break;

        case 3:
            if(marca=="ArgentinaLuz")
            {
                descuento=15;
            }
            else if(marca=="FelipeLamparas")
            {
                descuento=10;
            }
            else
            {
                descuento=5;
            }
        break;

        default:
            descuento=50;
        break;
    }*/
    

    //IF
    /* if(cantidadLamparitas>5)
    {
        descuento=50;
    }
    else
    {
        if(cantidadLamparitas==5)
        {
            if(marca=="ArgentinaLuz")
            {
                descuento=40;
            }
            else
            {
                descuento=30;
            }
        }
        else
        {
            if(cantidadLamparitas==4)
            {
                if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
                {
                    descuento=25;
                }
                else
                {
                    descuento=20;
                }
            }
        }
            if(cantidadLamparitas==3)
            {
                if(marca=="ArgentinaLuz")
                {
                    descuento=15;
                }
                else if(marca=="FelipeLamparas")
                {
                    descuento=10;
                }
                else
                {
                    descuento=5;
                }
            }
    }
    */
    
}
