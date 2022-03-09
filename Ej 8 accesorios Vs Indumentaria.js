
/*
4. Se pide gestionar los ingresos en pesos de un club de fútbol.
No se sabe cuántos son los ingresos.
El equipo tiene ingresos por "ENTRADAS", "INDUMENTARIA" y "ACCESORIOS".
Se solicita:  Tipo de Ingreso, ya mencionados anteriormente y Valor de Ingreso. 
Se pide:
Ingreso BRUTO del club.
Ingreso NETO del club después de pagar un impuesto del 18% sobre el BRUTO.
Del total de ingresos NETO se sabe que un 35% se destinan a la compra
 de dólares al costo de $220c/u, informar ese monto.
Determinar si se recaudó más por INDUMENTARIA o ACCESORIOS. 
Informando la diferencia del mayor. (Ej: Se recaudó $x más de ACCESORIOS)*/



function mostrar()
{
    var cantidadIngresos;
    var tipoIngresos;//"ENTRADAS", "INDUMENTARIA" y "ACCESORIOS".
    var valorIngreso;
    var respuesta=true;
    var acumuladorMonto=0;
    var ingresoNeto;
    var valorDestinadoAVerdes;
    var valorEnVedes;
    var diferencia;
    var mensaje="";

    while(respuesta==true)
        {
            tipoIngresos=prompt("Ingresetipo de ingreso");
            while(tipoIngresos!="entradas"&&tipoIngresos!="indumentaria"&&tipoIngresos!="accesorios")
            {
                tipoIngresos=prompt("ERROR ingrese tipo de ingreso");
            }

            valorIngreso=prompt("Ingrese monto del ingreso");     
            valorIngreso=parseInt(valorIngreso);
            while(isNaN(valorIngreso))
            {
                valorIngreso=prompt("Ingrese monto del ingreso");     
                valorIngreso=parseInt(valorIngreso);
           }           
        //Ingreso BRUTO del club.
        acumuladorMonto+=valorIngreso;
        
        if(tipoIngresos==indumentaria)
        {
            acumuladorIndumentaria+=valorIngreso;
        }
        else
        {
            if(tipoIngresos==accesorios)
            {
                acumuladorAccesorios+=valorIngreso;
            }
        }
        
        respuesta=confirm("Desea hacer otro ingreso?");
        }//FIN WHILE GENERAL

        if (acumuladorAccesorios>acumuladorIndumentaria)
         {
            diferencia=acumuladorAccesorios - acumuladorIndumentaria;
            mensaje=" se recaudo mas por accesorios con una diferencia de: "+ diferencia+" sobre la venta de indumentaria";
         }
         else
         {
            diferencia= acumuladorIndumentaria - acumuladorAccesorios;
            mensaje="Se recaudo mas por acumuladorIndumentaria con una diferencia de: "+ diferencia +" sobre venta de accesorios" ;
         }
    
    //ngreso NETO del club después de pagar un impuesto del 18% sobre el BRUTO.     
    ingresoNeto=acumuladorMonto- acumuladorMonto*18/100;
    
    //Del total de ingresos NETO se sabe que un 35% 
    valorDestinadoAVerdes=ingresoNeto*35/100;
    
    //se destinan a la compra de dólares al costo de $220c/u
    valorEnVedes=valorDestinadoAVerdes/220;
    valorEnVedes=(valorEnVedes).toFixed(2);

    document.write("Ingreso BRUTO del club " + acumuladorMonto + "<br>");
    document.write("Ingreso NETO del club después de pagar un impuesto del 18% sobre el BRUTO " + ingresoNeto +"<br>");
    document.write("Del total de ingresos NETO se destinan " + valorDestinadoAVerdes + " pesos a la compra de dólares al costo de $220c/u siendo entonces " + valorEnVedes + "dolares"+"<br>");
    document.write( mensaje + "<br>");
   }
