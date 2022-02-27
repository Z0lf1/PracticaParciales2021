/*Alan Magariños
Div I

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

*/

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
	notBandera=0;

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
				 	notBandera=1;
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
}
if(notBandera!=0)//b. El nombre del empleado No Binario con mas cantidad de hijos.
	{
		document.write("El nombre del empleado No Binario con mas cantidad de hijos: "+ nombreNobiMasHijos +"<br>");
	}
//c. Nombre y apellido del primer empleado que no tiene hijos.
	document.write("El nombre y el apellido del primer empleado que no tiene hijos es: " +nombrePrimerSin+ apellidoPrimerSin+"<br>");
//d. Mostrar el total de dinero que debera pagar la PYME en concepto de asignaciones
	document.write("El total de dinero que debera pagar la PYME en concepto de asignaciones es: "+ acumuladorAsinaciones+"<br>");
}	
