/*3
Vacunas
Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “América”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas en total
b- El total sin descuentos a pagar por los gastos de los viajes
c- Si en total se recibieron mas de 10 millones de vacunas se hace
un descuento de 25%, Si se recibieron entre 5 y 10 millones el
descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento, de cuanto fue y el importe final con
Descuento.
La cantidad de vacunas poner entre 5 y 25 para que se sobreentienda que es por millón o cien mil
*/
function mostrar()
{
  var origen;
  var cantidadVacunas;
  var costo;
  var acumuladorAsia;
  var acumuladorEuropa;
  var acumuladorAmerica;
  var acumuladorCosto;
  var costoFinal;
  var descuento;
  var menorVacunas;
  var mensajeDescuento;

  descuento=0;
  acumuladorAsia=0;
  acumuladorEuropa=0;
  acumuladorAmerica=0;
  acumuladorCosto=0;
  mensajeDescuento="No hubo descuento";
    while()
    {
        origen=prompt("Ingrese origen");
        while(origen!=“Asia”&&origen=!“europa”&&origen!=“america”)
        {
           origen=prompt("Error ingrese origen, valido :asia, europa, america");
        }

        cantidadVacunas=prompt("Ingrese cantidad Vacunas");     
        cantidadVacunas=parseInt(cantidadVacunas);
        while(isNaN(cantidadVacunas)||cantidadVacunas<5||cantidadVacunas>25)
        {
            cantidadVacunas=prompt("Error Ingrese cantidad Vacunas valido no menor a 5  y que no supere 25");     
            cantidadVacunas=parseInt(cantidadVacunas);        
        }

       costo=prompt("Ingrese costo vuelo");
       costo=parseInt(costo);
        while(isNaN(costo)||costo<1||costo>5)
        {
          costo=prompt("Error Ingrese costo vuelo");
          costo=parseInt(costo);
        }
        
        switch(origen)
        {
            case "asia":
            acumuladorAsia+=cantidadVacunas;
            break;
            case "europa":
            acumuladorEuropa+=cantidadVacunas;
            break;
            case "america":
            acumuladorAmerica+=cantidadVacunas;
            break;
        }
        acumuladorvacunas+=cantidadVacunas;
        acumuladorCosto+=costo;

    contador++;
    respuesta=confirm("Desea hacer otro ingreso?");
    }

    if(acumuladorAsia < acumuladorEuropa && acumuladorAsia < acumuladorAmerica)
    {//a- El origen que envió menor cantidad de vacunas en total
        menorVacunas = " Asia ";
    }
    else
    {
        if(acumuladorEuropa < acumuladorAmerica)
        {
             menorVacunas = " Europa ";
        }
        else
        {
             menorVacunas = " America ";
        }
    }
    if (acumuladorVacunas>4&&acumuladorVacunas<11)
       {
            descuento=15;
            mensajeDescuento=" Hubo descuento del 15%";
       }
       else
       {
          if (cantidadVacunas>10)
          {
               descuento=25;
               mensajeDescuento="Hubo descuento del 25%";
          }
       }
        
    costoFinal=acumuladorCosto-acumuladorCosto*descuento/100;

    document.write("El origen que envió menor cantidad de vacunas en total fue " + menorVacunas + "<br>");
    document.write("El total sin descuentos a pagar por los gastos de los viajes " + acumuladorCosto +"<br>");
    document.write(mensajeDescuento+" con un importe final de: "+ costoFinal + "<br>");
}