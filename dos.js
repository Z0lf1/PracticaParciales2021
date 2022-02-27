/*Alan Maga
Div I
2.	La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para la zona sur de GBA. 

Se cargan las planillas de ventas que poseen los siguientes datos (No sabemos cuantas planillas 
hay):

*Nombre de vendedor (Juan, Pedro o Maria)
*Importe de la venta (numero positivo NO mayor que 10000)

Al terminar de cargar las planillas se debe calcular el total de la comision por vendedor:
Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500000 obtendra una 
comisión del 10% sobre ese total.
De no alcanzar esta cifra, su comision sera del 5%.
Mostrar:
a. Importe total de ventas, cantidad de ventas y comision. (Por cada vendedor)
b. El nombre del vendedor que mas dinero recaudo en comisiones

*/

function mostrar()
{
	var importeVenta;
	var acumuladorPedro;
	var acumuladorJuan;
	var acumuladorMaria;
	var importeJuan;
	var importePedro;
	var importeMaria;
	var nombreVendedor;
	var comisionAlta;
	var comisionBaja;
	var contadorPedro;
	var contadorJuan;
	var contadorMaria;
	var mejorVendedor;

 	acumuladorPedro=0;
 	acumuladorJuan=0;
 	acumuladorMaria=0;

	comisionAlta=10;
	comisionBaja=5;

	contadorPedro=0;
	contadorJuan=0;
	contadorMaria=0;
	respuesta=true;
	
	while(respuesta==true)
	{
			nombreVendedor=prompt("ingresar nombre vendedor");
			while(nombreVendedor!="Juan" && nombreVendedor!="Pedro" && nombreVendedor!="Maria")
			{
				nombreVendedor=prompt("Incorrecto, ingresar nombre vendedor Juan/Pedro/Maria");
			}

			importeVenta=prompt("ingrese el importe de la venta");
			importeVenta=parseFloat(importeVenta);
			while(importeVenta>10000||isNaN(importeVenta))
			{
				importeVenta=prompt("Error, ingrese el importe de la venta valido de hasta 10000");
				importeVenta=parseFloat(importeVenta);
			}
			switch(nombreVendedor)//a.cantidad de ventas (Por cada vendedor)
				{
					case "Pedro":
					acumuladorPedro+=importeVenta;
					contadorPedro++;
					break;
					case"Juan":
					acumuladorJuan+=importeVenta;
					contadorJuan++;
					break;
					case"Maria":
					acumuladorMaria+=importeVenta;
					contadorMaria++;
					break;
				}
				respuesta=confirm("Desea continuar ingresando datos?");
	}
//a. Importe total de ventas y comision. (Por cada vendedor)
if(acumuladorPedro>49999)
{
	importePedro=acumuladorPedro+acumuladorPedro*comisionAlta/100;
}
else
	{
		importePedro=acumuladorPedro+acumuladorPedro*comisionBaja/100;
	}

if(acumuladorJuan>49999)
	{
		importeJuan=acumuladorJuan+acumuladorJuan*comisionAlta/100;
	}
	else
		{
			importeJuan=acumuladorJuan+acumuladorJuan*comisionBaja/100;	
		}

if (acumuladorMaria>49999)
	{
		importeMaria=acumuladorMaria+acumuladorMaria*comisionAlta/100;
	}
	else
		{
			importeMaria=acumuladorMaria+acumuladorMaria*comisionBaja/100;	
		}
//b. El nombre del vendedor que mas dinero recaudo en comisiones
if (importeJuan>importePedro && importeJuan>importeMaria)
    {
        mejorVendedor = "Juan tuvo mejores comisiones";
    }
    else
    {
        if (importePedro>importeMaria) 
        {
           mejorVendedor = "Pedro tuvo mejores comisiones";
        }
        else
        {
            mejorVendedor = "Maria tuvo mejores comisiones";
        }
    }
//a. Importe total de ventas, cantidad de ventas y comision. (Por cada vendedor)
document.write("Para el vendedor Pedro la cantidad de ventas fue: "+contadorPedro+" con un valor de "+ acumuladorPedro +"<br>");
document.write(" entonces le corresponde "+importePedro +" una vez aplicada la comision " +"<br>")
document.write("Para el vendedor Juan la cantidad de ventas fue:  "+contadorJuan+" con un valor de " + acumuladorJuan +"<br>");
document.write(" entonces le corresponde "+importeJuan +" una vez aplicada la comision " +"<br>");
document.write("Para el vendedor Maria la cantidad de ventas fue:  "+contadorMaria+" con un valor de "+acumuladorMaria +"<br>");
document.write(" entonces le corresponde "+importeMaria +" una vez aplicada la comision " +"<br>");
//b. El nombre del vendedor que mas dinero recaudo en comisiones
document.write(mejorVendedor+"<br>");
}		














