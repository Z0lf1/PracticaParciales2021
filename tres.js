/*Alan Magariños
Div I PRACTICA PARCIAL 2021

3.	De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)

El programa debera mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.

Sabiendo que: 

   *Si no tiene hijos no le corresponde asignación familiar 
   *Si tiene un hijo le corresponde 5000
   *Si tiene dos hijos le corresponde 8000 por sus dos hijos
   *Y si tiene más de dos hijos le corresponde 10000

d. Mostrar el total de dinero que debera pagar la PYME en concepto de asignaciones

function mostrar()
{
	var nombreEmpleado;
	var apellidoEmpleado;
	var genero;
	var cantidadDeHijos;
	var contadorEmpleados;
	var contadorMasculino;
	var contadorFemenino;
	var contadorNB;
	var porcentajeMasculino;
	var porcentajeFemenino;
	var porcentajeNB;
	var noBiMasHijos;
	var banderaNoBi;
	var nombreNobiMasHijos;
	var banderaHijos;
	var apellidoPrimerSin;
	var nombrePrimerSin;
	var acumuladorAsinaciones;
	var asignaciones;
	var notBandera;

	contadorMasculino=0;
	contadorFemenino=0;
	contadorNB=0;
	acumuladorAsinaciones=0;
	banderaNoBi=true;
	banderaHijos=true;
	contadorEmpleados=0;
	
	while(contadorEmpleados<4)
	{
		nombreEmpleado=prompt("Cual es el nombre?");

		apellidoEmpleado=prompt("Cual es el apellido");
		genero=prompt("Ingrese genero, siendo m para masculino, f para femenino o nb para no binarie");
		while(genero!="m" && genero!="f" && genero!="nb")
		{
			genero=prompt("Error...ingrese genero siendo m para masculino, f para femenino o nb para no binarie")
		}
		cantidadDeHijos=prompt("Ingrese la cantidad de hijos");
		cantidadDeHijos=parseInt(cantidadDeHijos);
		while(cantidadDeHijos<0|| isNaN(cantidadDeHijos))
		{
			cantidadDeHijos=prompt("Error...Ingrese la cantidad de hijos valida de 0 inclusive en adelante");
			cantidadDeHijos=parseInt(cantidadDeHijos);
		}
		//c. Nombre y apellido del primer empleado que no tiene hijos.
		if(cantidadDeHijos==0&&banderaHijos==true)
		{
			nombrePrimerSin=nombreEmpleado;
			apellidoPrimerSin=apellidoEmpleado;
			banderaHijos=false;
		}
		switch(genero)
		{
			case"m":
				contadorMasculino++;
				break;
			case"f":
				contadorFemenino++;
				break;
			default:
				contadorNB++;
				if (cantidadDeHijos>noBiMasHijos||banderaNoBi==true)
				//b. El nombre del empleado No Binario con mas cantidad de hijos.
				 {
				 	noBiMasHijos=cantidadDeHijos;
				 	nombreNobiMasHijos=nombreEmpleado;
				 	banderaNoBi=false;
				 }
				break;
		}
		switch(cantidadDeHijos)
		{
			case 0://Si no tiene hijos no le corresponde asignación familiar
				asignaciones=0;
				break;
			case 1://Si tiene un hijo le corresponde 5000
				asignaciones=5000;
				break;
			case 2://Si tiene dos hijos le corresponde 8000 por sus dos hijos
				asignaciones=8000;
				break;
			default://Y si tiene más de dos hijos le corresponde 10000 
				asignaciones=10000;
				break;		
		}
	acumuladorAsinaciones+=asignaciones;
 	contadorEmpleados++;
	}
//a. Porcentaje de empleados por cada genero.
porcentajeMasculino= contadorMasculino*100/4;
porcentajeFemenino=contadorFemenino*100/4;
porcentajeNB=contadorNB*100/4;

if(contadorMasculino>0)
{
	document.write("El porcentaje de empleados masculinos sobre el total es: "+ porcentajeMasculino +"%"+"<br>");
}
if(contadorFemenino>0)
{
	document.write("El porcentaje de empleadas femeninas sobre el total es: "+ porcentajeFemenino +"%"+"<br>");
}
if(contadorNB>0)
{
	document.write("El porcentaje de empleados no binaries sobre el total es: "+ porcentajeNB +"%"+"<br>");
	if(banderaNoBi==false)
	{//b. El nombre del empleado No Binario con mas cantidad de hijos.
		document.write("El nombre del empleado No Binario con mas cantidad de hijos: "+ nombreNobiMasHijos +"<br>");
	}
}	
//c. Nombre y apellido del primer empleado que no tiene hijos.
	document.write("El nombre y el apellido del primer empleado que no tiene hijos es: " +nombrePrimerSin+ apellidoPrimerSin+"<br>");
//d. Mostrar el total de dinero que debera pagar la PYME en concepto de asignaciones
	document.write("El total de dinero que debera pagar la PYME en concepto de asignaciones es: "+ acumuladorAsinaciones+"<br>");
}	
*/



/*
PARCIAL 2022  PARTE 1

1.UTN airlines nos pide desarrollar una app para registrar el ingreso de pasajeros
a distintos vuelos, se le pide a los pasajeros: nombre, edad (validar 13-85 entre),
cantidad de asientos que desea reservar (validar minimo 1 maximo 5 asientos),
cantidad de kilómetros del viaje (validar 3000 kilómetros el mínimo - 18000 kilómetros máximo),
el precio por asiento es 1500 pesos, informar:
A. La recaudación total del vuelo.
B. La cantidad total de asientos ocupados.
C. La edad promedio por pasajero.
D. La cantidad de pasajeros que tienen entre 18 y 45 años, que realizarán un viaje a un destino cuya distancia es 5000 km ó 13000 km

function mostrar()
{
	var nombre; //
	var edad;  //
	var cantidadAsientos;//
	var distancia;// 
	var precioAsiento;

	var contadorIngresos;
	var acumuladorRecaudacion;
	var acumuladorAsientos;
	var acumuladorEdad;
	var promedioEdad;
	var contadorAdultoViaje; 
	
	acumuladorAsientos=0;
	contadorAdultoViaje=0;
	acumuladorRecaudacion=0;
	contadorIngresos=0;
	acumuladorEdad=0;
	respuesta=true;
	precioAsiento=1500;
 	while(respuesta==true)
		{
			nombre=prompt("Ingrese nombre");
			
			edad= prompt("Ingrese edad");
			edad=parseInt(edad);
			while(edad<13||edad>84)
			{//(validar 13-85 entre)
				edad= prompt("Error, ingrese una edad valida entre 13 y 85 años");
				edad=parseInt(edad);
			}
			
			cantidadAsientos=prompt("Ingrese la cantidad de asientos que desea");
			cantidadAsientos=parseInt(cantidadAsientos);
			while(cantidadAsientos<1||cantidadAsientos>5||isNaN(cantidadAsientos))
			{//(validar minimo 1 maximo 5 asientos)
				cantidadAsientos=prompt("Error, ingrese una cantidad de asientos valida no inferior a 1 e que no supere 5");
				cantidadAsientos=parseInt(cantidadAsientos);
			}
		 	
		 	distancia=prompt("Ingrese la cantidad de kilómetros a viajar");
		 	distancia=parseInt(distancia);
		 	while(distancia<3000||distancia>18000||isNaN(distancia))
		 	{ //(validar 3000 kilómetros el mínimo - 18000 kilómetros máximo)
		 		distancia=prompt("Error, ingrese una cantidad de kilómetros valida a viajar no ingerior a 3000 y no superior a 18000");
		 		distancia=parseInt(distancia);
		 	}
		 	contadorIngresos++;
		 	acumuladorEdad+=edad;
		 	
		 	acumuladorAsientos+=cantidadAsientos;//A.La recaudación total del vuelo.
		 	acumuladorRecaudacion+= precioAsiento*cantidadAsientos;//A.La recaudación total del vuelo.
		 	
		 	if(edad<45||edad>18)
		 	{
		 		if(distancia==5000||distancia==13000)
		 		{//D. La cantidad de pasajeros que tienen entre 18 y 45 años, que realizarán un viaje a un destino cuya distancia es 5000 km ó 13000
		 			contadorAdultoViaje++
		 		}
		 	}

		 	respuesta = confirm("desea continuar?");
		}

 	promedioEdad=acumuladorEdad/contadorIngresos;//C. La edad promedio por pasajero.
 	document.write("La recaudacion total del vuelo es: " +acumuladorRecaudacion+"<br>");
 	document.write("La cantidad total de asientos ocupados es: " +acumuladorAsientos+"<br>");
 	document.write("La edad promedio de los pasajeros es: " +promedioEdad+"<br>");
 	if (contadorAdultoViaje>0)
 	{
 		document.write("La cantidad de pasajeros que tienen entre 18 y 45 años, que realizarán un viaje a un destino cuya distancia es 5000 km ó 13000 km es: " +contadorAdultoViaje+"<br>");
 	}
}
*/

/* PARCIAL  2022 PARTE 2 MIO REVISAR 

2. Un jugador de League of Legends tiene un fin de semana libre y va a jugar 15
partidas.
Para mejorar su jugabilidad, por cada partida jugada va a registrar:
- Modo de juego ("Normal", "Clasificatoria", "ARAM")
- Nombre del personaje que usó (“Vayne”,”Annie”,”Renata”)
- La cantidad de asesinatos. (No puede ser negativo)
- La cantidad de muertes. (No puede ser negativo)
- La cantidad de asistencias. (No puede ser negativo)
De lo registrado, al jugador le interesa lo siguiente:
a) El modo de juego más jugado.
b) De las partidas ARAM, el personaje con menos asistencias.
c) El promedio de muertes.
d) El porcentaje sobre los modos de juego. (ejemplo: 20% normal, 50% clasificatoria y
30 % ARAM.)

function mostrar()
{

	var contadorPartidas;
    var modoDeJuego;// ("Normal", "Clasificatoria", "ARAM")
    var nombrePersonaje; //(“Vayne”,”Annie”,”Renata”)
    var kill; //(No puede ser negativo)
	var dth; //cantidad de muertes. (No puede ser negativo)
    var assist;// La cantidad de asistencias. (No puede ser negativo)
 	var contadorAram;
  	var contadorClasifi;
  	var contadorNormal; 
 	var acumuladorDth;
 	var acumuladorAssist;
 	var acumuladorKill;

 	contadorPartidas=0;
  	contadorAram=0;
  	contadorClasifi=0;
  	contadorNormal=0;
  	acumuladorAssist=0;
  	acumuladorDth=0;
  	acumuladorKill=0;
  	contadorVayne;
  	contadorAnnie;
  	contadorRenata;
  	var menorCantidadAsist;
  	var nombrePersonajeMenosAssit;
 	var	banderaAssist;
  	acumuladorDth=0;

  	
 	banderaAssist=true;
 	while(contadorPartidas<14)
 	{
 		nombrePersonaje=prompt("ingrese el nombre del personaje")
 		while(nombrePersonaje!="vayne"&&nombrePersonaje!="Annie"&&nombrePersonaje!="Renata")
 		{
 			nombrePersonaje=prompt("Dale champion, nombre del nombre del personaje vayne/annie/renata");
 		}
 		
 		kill=prompt("Ingrese cantidad de asesinatos en la partida");
 		kill=parseInt(kill);
 		while(kill<0||isNaN(kill))
 		{
 			kill=prompt("Ingrese cantidad de asesinatos en la partida");
 			kill=parseInt(kill);
 		}

 		assist=prompt("Ingrese la cantidad de asistencias en la partida");
 		assist=parseInt(assist);
 		while(assist<0||isNaN(assist))
 		{
 			assist=prompt("Ingrese la cantidad de asistencias en la partida");
 			assist=parseInt(assist);
 		}

 		dth=prompt("Ingrese la cantidad de muertes en la partida");	
		dth=parseInt(dth);
		while(dth<0||isNaN(dth))
 		{
 			dth=prompt("Error  la cantidad de muertes en la partida");	
			dth=parseInt(dth);
 		}

	switch(modo)
 		{ //a) El modo de juego más jugado.
 			case "aram":
 			contadorAram++;
 			
 			break;
 			case "Clasifi":
 			contadorClasifi++;
  			break;
  			default:
  			contadorNormal++;
  			break;//para vos Raffi
 		}
 		acumuladorAssist+=assist;
 		acumuladorDth+=dth;
 		acumuladorKill+=kill;
 	if(modo==aram)
 		{
 			if(assist<menorCantidadAsist||banderaAssist==true)
 			{
 				menorCantidadAsist=assist;
 				nombrePersonajeMenosAssit=nombrePersonaje;
 				banderaAssist=false;

 			}
 		}
 	}
 	if(contadorClasifi>contadorAram && contadorClasifi>contadorNormal)
 	{
 		modoMasJugado=Clasifi;
 	}
 	else
 	{
 	  if(contadorNormal>contadorAram)
 	  {
 	  	modoMasJugado=normal;
 	  }
 	  else
 	  {
 	  	modoMasJugado=aram;
 	  }
 	}

	promedioMuertes=acumuladorDth/15;//c) El promedio de muertes.

 document.write("El modo de juego más jugado es: " +modoMasJugado+"<br>");
 document.write("De las partidas ARAM, el personaje con menos asistencias es: " +nombrePersonajeMenosAssit+"<br>");
 	document.write("El promedio de muertes es: " +promedioMuertes+"<br>");
}

*/

/*

2. Un jugador de League of Legends tiene un fin de semana libre y va a jugar 15
partidas.
Para mejorar su jugabilidad, por cada partida jugada va a registrar:
- Modo de juego ("Normal", "Clasificatoria", "ARAM")
- Nombre del personaje que usó (“Vayne”,”Annie”,”Renata”)
- La cantidad de asesinatos. (No puede ser negativo)
- La cantidad de muertes. (No puede ser negativo)
- La cantidad de asistencias. (No puede ser negativo)
De lo registrado, al jugador le interesa lo siguiente:
a) El modo de juego más jugado.
b) De las partidas ARAM, el personaje con menos asistencias.
c) El promedio de muertes.
d) El porcentaje sobre los modos de juego. (ejemplo: 20% normal, 50% clasificatoria y
30 % ARAM.)


function mostrar()
{
	 var modoJuego;
    var nombrePersonaje;
    var kills;
    var deaths;
    var minAsistencias;
    var asistencias;
    var asistenciasVayne;
    var asistenciasAnnie;
    var asistenciasRenata;
    var promedioDeaths;
    var contadorAram;
    var contadoClasificatoria;
    var contadorNormal;
    var contadorMax;
    var porcentajeAram;
    var porcentajeNormal;
    var porcentajeClasificatoria;
    var acumuladorDeaths;
    var acumulador2;
    var acumulador3;
    var control;
    

    control = 0;
    acumulador = 0;
    acumuladorDeaths = 0;
    acumulador = 0;
    contadorAram = 0;
    contadoClasificatoria = 0;
    contadorNormal = 0;
    contadorMax = 0;
    contadorDeaths = 0;
    

    while(control < 15){

      modoJuego = prompt("Ingrese modo de juego: normal, clasificatoria, aram");
        while(modoJuego != "normal" && modoJuego != "clasificatoria" && modoJuego != "aram" ){

            modoJuego = prompt("Error, reingrese modo de juego: normal, clasificatoria, aram");
        }

        nombrePersonaje = prompt("Ingrese nombre del personaje: vayne, annie, renata");
        while(nombrePersonaje != "vayne" && nombrePersonaje != "annie" && nombrePersonaje != "renata"){

            nombrePersonaje = prompt("Error, reingrese nombre del personaje: vayne, annie, renata");
        }

        kills = prompt("Ingrese asesinatos:");
        kills = parseInt(kills);
        while( isNaN (kills) || kills < 0 ){

            kills = prompt("Error, reingrese kills:");
            kills = parseInt(kills);
        }

        deaths = prompt("Ingrese muertes:");
        deaths = parseInt(deaths);
        while( isNaN (deaths) || deaths < 0 ){

            deaths = prompt("Error, reingrese muertes:");
            deaths = parseInt(deaths);
        }

        asistencias = prompt("Ingrese asistencias:");
        asistencias = parseInt(asistencias);
        while( isNaN (asistencias) || asistencias < 0 ){

            asistencias = prompt("Error, reingrese muertes:");
            asistencias = parseInt(asistencias);
        }// fin ingreso datos
         
         acumuladorDeaths+= deaths;
         contadorDeaths++;

         switch(modoJuego){

            case "normal":
            contadorNormal++;
            break;

            case "clasificatoria":
            contadoClasificatoria++;
            break;

            default:
            contadorAram++
            if (nombrePersonaje == "renata") {

               asistenciasRenata+= asistencias;

            }
            else{
               if (nombrePersonaje == "vayne") {

                  asistenciasVayne+= asistencias;
               }
               else{
                  asistenciasAnnie+= asistencias;
               }
            }
            break;

         }


         if (contadorNormal > contadoClasificatoria && contadorNormal > contadorAram){

            contadorMax = contadorNormal;
         }
         else{
            if (contadoClasificatoria > contadorAram) {

               contadorMax = contadoClasificatoria;
            }
            else{
               contadorMax = contadorAram;
            }
         }

         if (asistenciasAnnie < asistenciasVayne && asistenciasAnnie < asistenciasRenata) {

            minAsistencias = asistenciasAnnie;
         }
         else{
            if (asistenciasRenata < asistenciasVayne ) {

               minAsistencias = asistenciasRenata;
            }
            else{
               minAsistencias = asistenciasVayne;
            }
         }
         
         control++;
   }

   promedioDeaths = acumuladorDeaths / contadorDeaths;

   porcentajeAram = contadorAram*100/15;
   porcentajeClasificatoria = contadoClasificatoria*100 /15;
   porcentajeNormal = contadorNormal*100 /15;

    document.write("modo de juego más jugado: " + contadorMax + "<br>");
    document.write("partidas ARAM, el personaje con menos asistencias:" + minAsistencias + "<br>");
    document.write("promedio de muertes: " + promedioDeaths + "<br>");
    document.write("porcentaje normal: " + porcentajeNormal + "%" + "<br>");
    document.write("porcentaje clasificatoria: " + porcentajeClasificatoria + "%" + "<br>");
    document.write("porcentaje aram: " + porcentajeAram +"%" + "<br>");

}

*/

