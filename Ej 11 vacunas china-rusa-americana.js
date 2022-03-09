/* Ej 11 
Se necesita llevar el registro de un vacunatorio. 
Para ello se podrá registrar los datos de las personas
vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite
la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la rusa
b- Nombre y vacuna de la mujer con más edad
c- De las personas que recibieron la vacuna americana que porcentaje
son mayores de edad
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
e- Vacuna menos inoculada
*/

function mostrar()
{
    var nombre;// (entre 3 y 10 caracteres)
    var edad;// ( mayor o igual a 12)
    var vacuna;// (“rusa”, “china”, “americana”) Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
    var dosis;// (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
    var sexo;//( “f” o “m” )
    var acumuladorRusa=0;
    var acumuladorEdadesRusa=0;
    var contadorRusa=0; 
    var promedioEdadRusa;   
    var respuesta=true;
    var contadorMaxoresAmericana=0;
    var contadorAmericana=0;
    var edadMaximaMujer;
    var nombreMujer;
    var vacunaMujer;
    var banderaEdadMaxima = false;
    var porcentajeAMayores;
    var porcentajeSegunda;
    var contadorSegunda=0;
    var contador=0;
    var contadorChina=0;
    var menosInoculada;
    while(respuesta==true)
    {
        nombre=prompt("Ingrese nombre");

        edad=prompt("Ingrese edad mayor o igual a 12");
        while(isNaN(edad)||edad<12)
        {
          edad=prompt("ERROR Ingrese edad mayor o igual a 12");
        }
        if (edad>11&&edad<18) 
        {//Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
            vacuna=prompt("Ingrese origen vacuna");     
            while(vacuna!="americana")
            {
                vacuna=prompt("Usted solo puede recibir la vacuna americana");        
            }
        }
        else 
        {
            vacuna=prompt("Ingrese origen vacuna: rusa, china o americana");     
            while(vacuna!="rusa"&&vacuna!="china"&&vacuna!="americana")
            {
                vacuna=prompt("Ingrese origen vacuna: rusa, china o americana");        
            }
        }
              
        dosis=prompt("Ingrese p en caso de ser la primer dosis o s en caso de ser la segunda dosis");     
        while(dosis!="p"&&dosis!="s")
        {
            dosis=prompt("ERROR Ingrese p en caso de ser la primer dosis o s en caso de ser la segunda dosis");         
        }

        sexo=prompt("Ingrese sexo f o m");
        while(sexo!="f"&&sexo!="m")
        {
           sexo=prompt("ERROR Ingrese sexo f o m");
        }
        switch (vacuna)
        {
            case "rusa":
            acumuladorEdadesRusa+edad;
            contadorRusa++;
            break;
            case "americana":
                //c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
                if(edad>17)
                {
                   contadorMaxoresAmericana++; 
                }
                contadorAmericana++;
            default:
            contadorChina++;
            break;
         }
         
    if(sexo=="f")
    {//b- Nombre y vacuna de la mujer con más edad
        if(edad > edadMaximaMujer || banderaEdadMaxima == false)
        {
            edadMaximaMujer = edad;
            nombreMujer=nombre;
            vacunaMujer=vacuna;
            banderaEdadMaxima = true;
        }
    }
    if (dosis=="s")
    {//d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
        contadorSegunda++;
    }

    contador++;
    respuesta=confirm("Desea hacer otro ingreso?");
    }// ACA TERMINA EL WHILE
    if(contadorChina < contadorAmericana && contadorChina < contadorRusa)
        {
            menosInoculada = "es China";
        }
        else
        {
            if(contadorAmericana < contadorRusa)
            {
                menosInoculada = "es Americana";
            }
            else
            {
                menosInoculada = "es Rusa";
            }
        }
    //c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
    porcentajeAMayores=contadorMaxoresAmericana*100/contadorAmericana;
    //a- Promedio de edad de los que se vacunaron con la rusa
    promedioEdadRusa =acumuladorEdadesRusa/contadorRusa;
    //d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
    porcentajeSegunda=contadorSegunda*100/contador;
    //e- Vacuna menos inoculada

document.write("Promedio de edad de los que se vacunaron con la rusa " + promedioEdadRusa + " % " +"<br>");
document.write("De la mujer con más edad el nombre es " + nombreMujer + " y la vacuna es" + vacunaMujer + "<br>");
document.write("De las personas que recibieron la vacuna americana que porcentaje son mayores de edad " + porcentajeAMayores + " %" +"<br>");
document.write("Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados " + porcentajeSegunda + " % " + "<br>");
document.write("La vacuna menos inoculada" + menosInoculada +"<br>");
}