/******************************************************************************

2)Una librería que se especializa en venta de libros importados desea calcular ciertas métricas 
en base a las ventas de sus productos (No se sabe cuántos).
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:  

A)El más barato de los libros de drama con su importe.
B)Qué porcentaje de cada género se vendió.
C)Informar el título del primer libro de drama que se vendió.


*******************************************************************************/





function mostrar()
{
    var tituloLibro;
    var genero;// (ciencia ficción – Drama – Terror)
    var material;//(rústica – tapa dura)
    var importe;// (No pueden ser números negativos ni mayor a los 30000)
    var respuesta=true;
    var contadorDrama=0;
    var contadorFiccion=0;
    var contadorTerror=0;
    var importeMINIMO;
    var banderaImporteMinima = false;
    var masEconomico;
    var banderaPRIMERAVEZ= false;
    var primerDrama;
    var primerDImporte;
    var contador; 
    while(respuesta==true)
    {
        tituloLibro=prompt("Ingrese titulo del Libro");
        
        genero=prompt("Ingrese el genero del libro: ficción, drama o terror");
        while(genero!="drama"&&genero!="ficcion"&&genero!="terror")
        {
            genero=prompt("Error, ingrese el genero del libro valido: ficción, drama o terror");
        }
        material=prompt("Ingrese el material de la tapa del libro: rustica o dura ");
        while(material!="rustica"&&material!="dura")
        {
            material=prompt("Error ingrese el material de la tapa del libro: rustica o dura ");
        }
        importe=prompt("Ingrese importe de la compra");     
        importe=parseInt(importe);
        while(isNaN(importe)||importe<0 ||importe>3000)
        {
           importe=prompt("Error ingrese importe de la compra");     
           importe=parseInt(importe);       
        }
        switch(genero)
        { 
            case "drama":
                //C)Informar el título del primer libro de drama que se vendió.
                if(banderaPRIMERAVEZ == false)
                {
                   primerDrama = tituloLibro;
                   primerDImporte=importe;
                   banderaPRIMERAVEZ == true;
                }
                if(importe < importeMINIMO || banderaImporteMinima == false)
                {//A)El con titulo más barato de los libros de drama con su importe.
                    importeMINIMO = importe;
                    masEconomico=tituloLibro;
                    banderaImporteMinima = true;
                }
                
            break;
            case "ficcion":
            contadorFiccion++;
            break;
            default:
            contadorTerror++;
            break;

        }
        
    contador++;
    respuesta=confirm("Desea hacer otro ingreso?");
    }//FIN WHILE GENERAL



     //B)Qué porcentaje de cada género se vendió.
     porcentajeTerror=contadorTerror*100/contador;
     porcentajeDrama=contadorDrama*100/contador;
     porcentajeFiccion=contadorFiccion*100/contador;


    document.write("El titulo del más barato de los libros de drama es: " +masEconomico + " y con su importe  " + importeMINIMO + "<br>");
    document.write("Se vendió " +porcentajeTerror  + "% de terror, "+ porcentajeDrama +"% de drama y " +porcentajeFiccion +"% de ficcion"+ "<br>");
    document.write(" El primer libro de drama que se vendió fue " +primerDrama + "<br>");
}
