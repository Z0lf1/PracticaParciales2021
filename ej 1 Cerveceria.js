/* Ej 1 Cerverceria
Una cervecería necesita realizar un sistema de ventas online, donde se calculará las
preferencias de 10 usuarios del sitio.
Los datos necesarios son:
-Nombre 
-Genero: (Masculino – Femenino –No binario)
-Edad (validar que sea mayor a 18 años)
-Tipo de cerveza:  Roja – Honey –Negra - Golden
-Preferencia: (tirada – en botella)
Calcular y mostrar en un document.write:
a.Porcentaje de usuarios que prefieren cada tipo de cerveza.
b.Cantidad de Mujeres entre 25 y 35 años que prefieren cerveza roja y tirada.
c.Preferencia del Masculino de más edad que toma Golden.
*/

function mostrar()
{
    var control;
    var nombre;
    var genero;
    var edad;
    var tipoCerveza;
    var preferencia;
    var preferenciaMaxima;
    var contadorMujerRojaTirada;
    var porcentajeGolden;
    var porcentajeHoney;
    var porcentajeNegra;
    var porcentajeRoja;
    var contadorRoja;
    var contadorHoney;
    var contadorNegra;
    var contadorGolden;
    var edadMaxima;
    var banderaEdadMaxima;
    control=0;
    contadorRoja=0;
    contadorHoney=0;
    contadorNegra=0;
    contadorGolden=0;
    banderaEdadMaxima=false;
    contadorMujerRojaTirada=0;
    while(control<10)
    {
        nombre=prompt("Ingrese nombre");

        genero=prompt("Ingrese genero f para femenino, m para masculino y nb para no binario");
        while(genero!="f" &&genero!="m"&&genero!="nb")
        {
            genero=prompt("Ingrese genero f para femenino, m para masculino y nb para no binario");
        }

        edad=prompt("Ingrese edad");     
        edad=parseInt(edad);
        while(isNaN(edad)||edad<18)
        {
            edad=prompt("Ingrese edad valida en caracteres numericos o una edad superior a 17");     
            edad=parseInt(edad);        
        }

        tipoCerveza=prompt("Ingrese tipo de cerveza:roja – honey –negra - golden");//Tipo de cerveza:  Roja – Honey –Negra - Golden
        while(tipoCerveza!="roja"&&tipoCerveza!="honey"&&tipoCerveza!="negra"&&tipoCerveza!="golden")
        {
           tipoCerveza=prompt("Error ingrese tipo de cerveza:roja – honey – negra - golden");
        }
              //Preferencia: (tirada – en botella)
        preferencia=prompt("Ingrese como la desea servida, en botella o tirada");
        while(preferencia!="tirada"&&preferencia!="botella")
        {
            preferencia=prompt("Ingrese como la desea servida, en botella o tirada");
        }
        
        switch(tipoCerveza)
        {
            case "roja":
            contadorRoja++;
            break;
            case "honey":
            contadorHoney++;
            break;
            case "negra":
            contadorNegra++;
            break;
            default:
            contadorGolden++;
            break;
        }
         if (genero=="f")
         {//b.Cantidad de Mujeres entre 25 y 35 años que prefieren cerveza roja y tirada.
            if(edad>24&&edad<36)
            {
                if(tipoCerveza=="roja"&&preferencia=="tirada")
                {
                    contadorMujerRojaTirada++;
                }
            }
         }
         else
         {
            if(genero=="m"&&tipoCerveza=="golden")
            {//c.Preferencia del Masculino de más edad que toma Golden.
                if(edad>edadMaxima || banderaEdadMaxima == false)
                {
                    edadMaxima =edad;
                    preferenciaMaxima=preferencia;
                    banderaEdadMaxima = true;
                }
            }
         }
        control++;
    }
    porcentajeRoja= contadorRoja* 100/10; //a.Porcentaje de usuarios que prefieren cada tipo de cerveza.
    PorcentajeHoney= contadorHoney*100/10;
    porcentajeNegra= contadorNegra* 100/10; 
    PorcentajeGolden= contadorGolden*100/10;


    document.write("Porcentaje de usuarios que prefieren roja es: " +porcentajeRoja  + "%"+ "<br>");
    document.write("Porcentaje de usuarios que prefieren honey es: " + PorcentajeHoney + "%" +"<br>");
    document.write("Porcentaje de usuarios que prefieren negra es: " + porcentajeNegra + "%" +"<br>");
    document.write("Porcentaje de usuarios que prefieren golden es: " + PorcentajeGolden + " %" + "<br>");

    document.write("Cantidad de Mujeres entre 25 y 35 años que prefieren cerveza roja y tirada es: " + contadorMujerRojaTirada+ "<br>");
    document.write("Preferencia del Masculino de más edad que toma Golden es " + preferenciaMaxima +"<br>");
    
} 