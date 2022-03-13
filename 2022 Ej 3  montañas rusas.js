/*MAGARIÑOS ALAN 
DIV I

3. Se debe llevar a cabo el registro de ingresos a un parque de diversiones.  
Dicho parque se caracteriza por su variedad de montañas rusas. 
Se pide el ingreso del nombre del visitante, la edad (mayores a 12 años), 
tipo de pasaporte (sin pasaporte, convencional, premium), 
tipo de montaña rusa (Fantasma, Acuática, Adrenalina100%). 

Tener en cuenta:
El valor de acceso a todas las montañas rusas es de $500.
Los visitantes sin pasaporte, abonan al momento de subir al juego. 
Los visitantes con pasaporte convencional, abonan el 30% del valor de la entrada.
Los visitantes con pasaporte premium, no abonan nada.

Se necesita saber: 

A)La recaudación en efectivo por las tres montañas rusas.
B)Porcentaje de visitantes que se subieron a cada montaña rusa.
C)Cuál es el tipo de pasaporte que mas se utilizo (incluyendo los visitantes sin pasaporte)


*/



function mostrar()
{
  var nombre;//
  var edad;// (mayores a 12 años), 
  var tipoPasaporte;// (sin pasaporte, convencional, premium), 
  var tipoMontaña;// (Fantasma, Acuática, Adrenalina100%). 
  var costo=500;
  var costoPago; 
  var respuesta=true;
  var contadorFan=0;
  var contadorAcua=0;
  var contadorAdre=0;
  var contador=0;
  var contadorSin=0;
  var contadorCon=0;
  var contadorPre=0;
  var pasa;
  var acumuladorCosto=0;

  while(respuesta==true)
    {
        nombre=prompt("Ingrese nombre");

        edad=prompt("ingrese edad superior a 12");
        edad=parseInt(edad);
        while(edad<13)
        {
         edad=prompt("Error ingrese edad superior a 12");
         edad=parseInt(edad);   
        }
        tipoPasaporte=prompt("Ingrese tipo pasaporte: sin, convencional o premium");
        while(tipoPasaporte!="sin"&&tipoPasaporte!="convencional"&&tipoPasaporte!="premium") 
        {
            tipoPasaporte=prompt("Error ingrese tipo pasaporte: sin, convencional o premium");
        }    
        tipoMontaña=prompt("Ingrese tipo montaña: fantasma, acuatica, adrenalina")
         while(tipoMontaña!="fantasma"&&tipoMontaña!="acuatica"&&tipoMontaña!="adrenalina")
         {
          tipoMontaña=prompt("Error Ingrese tipo montaña: fantasma, acuatica, adrenalina")  
         } 
        
    switch(tipoPasaporte)
    {
        case "sin":
        costoPago= costo;
        contadorSin++;
        break;
        case "convencional":
        costoPago=costo*30/100;
        contadorCon++;
        break;
        case "premium":
        contadorPre++;
        costoPago=0;
        break;
    }
    switch(tipoMontaña)
    {
        case"fantasma":
        contadorFan++;
        break;
        case"acuatica":
        contadorAcua++;
        break;
        case"adrenalina":
        contadorAdre++;
        break;
    }


    acumuladorCosto+=costo;
    contador++;
    respuesta=confirm("Desea hacer otro ingreso?");
    }
    //B)Porcentaje de visitantes que se subieron a cada montaña rusa.
    porcentajeFan=contadorFan*100/contador;
    porcentajeAcua=contadorAcua*100/contador;
    porcentajeAdre=contadorAdre*100/contador;
    //C)Cuál es el tipo de pasaporte que mas se utilizo (incluyendo los visitantes sin pasaporte)
    if(contadorSin > contadorCon && contadorSin > contadorPre)
    {
        pasa = " sin pasaporte ";
    }
    else
    {
        if(contadorCon > contadorPre)
        {
            pasa = " el Convencional";
        }
        else
        {
            pasa = "eL  premium";
        }
    }
document.write("a recaudación en efectivo por las tres montañas rusas es" + acumuladorCosto + "<br>");
document.write("Porcentaje de visitantes que se subieron a Adrenalina100% es de  " + porcentajeAdre + "% "+ "<br>");
document.write("Porcentaje de visitantes que se subieron a Acuática es de " + porcentajeAcua + "% " +"<br>");
document.write("Porcentaje de visitantes que se subieron a Fantasma de " + porcentajeFan + "% " +"<br>");
document.write("Cuál es el tipo de pasaporte que mas se utilizo fue" + pasa  +"<br>");
}