/* Partidos perdidos/GANADOS
3.  Debemos realizar un programa que lleve el registro de los partidos jugados por nuestro equipo.
     No se sabe cuántos.
    Se deberá cargar en cada entrada el nombre del equipo contrario, si jugamos de local o visitante(validar) ,
     los goles hechos por nuestro equipo y los goles hechos por el equipo contrario (validar,
         la cantidad de goles no puede ser negativo).
    El programa deberá evaluar la cantidad de goles de cada equipo y determinará si fue empate, victoria o derrota.
    Al final se deberá mostrar:
    a) el promedio(porcentaje) de victorias de nuestro equipo
    b) cantidad de goles hechos y recibidos.
    c) cantidad de goles realizado en nuestra primer victoria y el nombre del equipo rival
    d) promedio de victorias como local y promedio de derrotas como visitante.
    e) nombre y cantidad de goles del equipo que nos hizo más goles.

*/

function mostrar()
{
     var equipoContrario;
     var posicion;
     var golesPropios;
     var golesContrarios;
     var contadorVictorias;
     var contadorDerrotas;
     var contadorDerrotasVisitante;
     var contadorPartidos;
     
     var banderaPRIMERAVEZ;
     var cantidadGolesPrimera;
     var contadorVictoriasLocal;
     var promedioVictorias;
     var PromedioVictoriasLocal;
     var PromedioVictoriasVisitante;
     var acumuladorGolesHechos;
     var acumuladorGolesRecibidos;
     var contrariosMax;
     var banderaMaxGoles;
     var rivalVencedor;
     var contadorEmpates;


     acumuladorGolesHechos=0;
     acumuladorGolesRecibidos=0;
     contadorVictoriasLocal=0;
     contadorVictorias=0;
     contadorDerrotas=0;
     contadorEmpates=0;

     contadorDerrotasVisitante=0;
     contadorPartidos=0;
     
     banderaMaxGoles= false;
     var respuesta;
     respuesta=true;
     banderaPRIMERAVEZ =false;
        while(respuesta==true)
        {
                equipoContrario=prompt("Ingrese nombre de equipo contrario");
                posicion=prompt("Declare si la posicion del partido fue visitante o local");
                while(posicion!="visitante"&&posicion!="local")
                {
                   posicion=prompt("ERROR...Declare si la posicion del partido fue visitante o local");
                }

                golesPropios=prompt("Ingrese cantidad de goles definidos al rival");     
                golesPropios=parseInt(golesPropios);
                while(isNaN(golesPropios)||golesPropios<0)
                {
                    golesPropios=prompt("Ingrese cantidad de goles definidos al rival");     
                    golesPropios=parseInt(golesPropios);
                }
               
                golesContrarios=prompt("Ingrese cantidad de goles definidos por el rival");     
                golesContrarios=parseInt(golesContrarios);
                while(isNaN(golesContrarios)||golesContrarios<0)
                {
                    golesContrarios=prompt("Ingrese cantidad de goles definidos por el rival");     
                    golesContrarios=parseInt(golesContrarios);                     
                }

                

                if(golesPropios>golesContrarios)
                {
                    if(banderaPRIMERAVEZ == false)
                    {//c) cantidad de goles realizado en nuestra primer victoria y el nombre del equipo rival
                        cantidadGolesPrimera = golesPropios;
                        nombrePrimerDerrotado=equipoContrario;
                        banderaPRIMERAVEZ = true;
                    }
                    if (posicion=="local")
                    {
                        contadorVictoriasLocal++;
                    }
                    contadorVictorias++;
                }
                else
                {
                    if (golesPropios<golesContrarios)
                    {
                        if (posicion=="visitante")
                        {
                            contadorDerrotasVisitante++;    
                        }
                        contadorDerrotas++;
                    }
                    else
                    {
                        contadorEmpates++;
                    }
                }
                if(golesContrarios > contrariosMax || banderaMaxGoles == false)
                {
                    contrariosMax = golesContrarios;
                    rivalVencedor=equipoContrario;
                    banderaMaxGoles = true;
                }
                acumuladorGolesHechos+=golesPropios;//b) cantidad de goles hechos y recibidos.
                acumuladorGolesRecibidos+=golesContrarios;
                contadorPartidos++;
                respuesta=confirm("Desea hacer otro ingreso?");
        }
        //a) el promedio(porcentaje) de victorias de nuestro equipo
        promedioVictorias=(contadorVictorias*100/contadorPartidos).toFixed(2);
        //d) promedio de victorias como local y promedio de derrotas como visitante.(CALCULADO DIFERENCIANDO LAS LOCALES ó VISITANTES SOBRE LAS GLOBALES respectivas y no sobre la totalidad de partidos)
        PromedioVictoriasLocal=(contadorVictoriasLocal*100/contadorVictorias).toFixed(2);
        promedioDerrotasVisitante=(contadorDerrotasVisitante*100/contadorDerrotas).toFixed(2);


        document.write("EL porcentaje de victoriass de nuestro equipo es del: " + promedioVictorias + "%"+ "<br>");
        document.write(" cantidad de goles hechos: " + acumuladorGolesHechos  + "<br>");
        document.write("cantidad de goles recibidos: " + acumuladorGolesRecibidos + "<br>");
        document.write("cantidad de goles realizado en nuestra primer victoria fue:" +  cantidadGolesPrimera+ " y el nombre del equipo rival " + nombrePrimerDerrotado + "<br>");
        document.write(" El promedio de victorias locales es del: " +PromedioVictoriasLocal+"%"+"<br>");
        document.write("El promedio de visitante como local es del: " + promedioDerrotasVisitante +"%"+"<br>");
        document.write("El equipo que nos hizo mas goles fue: " + rivalVencedor +" y la cantidad de goles fue "+contrariosMax+"<br>");
}