/* Alan Magariños 
Div I PRACTICA PARCIAL 2021

1.	Se ingresan 5 importes, marca del producto y pais de origen (China, Uruguar o Paraguay).
Calcular y mostrar:
a.	Minimo importe con su pais
b.	Maximo importe con su marca
c.	Promedio importe
d.	Cantidad de productos de China
e.	Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
*/

function mostrar()
{
	var ingresoImporte;
	var marcaProducto;
	var paisOrigen;

	var contador;
	var acumuladorPrecio;
	var precioMaximo;
	var banderaPrecio; 
	var promedioImporte;
	var productoBarato;
	var precioMinimo;
	var contadorChina;
	var marcaMasCara;
	
	marcaMasCara="";
	productoBarato="";
	contadorChina=0;
	precioMaximo=0;
	precioMinimo=0;
	banderaPrecio=false;
	
	acumuladorPrecio=0;
	
	control= 0;

    while(control < 5)
	{
		//while general
        precio= prompt ("Ingrese el precio del mismo");
        precio= parseInt(precio);
       	while(isNaN(precio) || precio<0 )//precio
        {
            precio= prompt("Error.. reingrese el precio superior a cero");
            precio= parseInt(precio);
        }
        //marca
        marcaProducto= prompt("Ingrese marca del producto ");  
        
        paisOrigen = prompt("Ingrese el pais de origen siendo Paraguay, Uruguay o China: ");
        while(paisOrigen != "Paraguay" && paisOrigen != "Uruguay" && paisOrigen != "China")
        {
           paisOrigen= prompt("Error...Ingrese el pais de origen siendo Paraguay, Uruguay o China: ");
        }
        //a.	Minimo importe con su pais
        if(precio<precioMinimo || banderaPrecio==false) 
		{ 
			precioMinimo= precio;
			productoBarato= paisOrigen;
		}
		//b.	Maximo importe con su marca
		if(precio>precioMaximo ||banderaPrecio == false)
		{
			precioMaximo = precio;
			marcaMasCara = marcaProducto;
			banderaPrecio=true;
		}		
					
		acumuladorPrecio+=precio;
        //d.	Cantidad de productos de China
        if(paisOrigen=="China")
        {
        	contadorChina++;
        }
		control++; 
    }
    //c.Promedio importe
    promedioImporte=acumuladorPrecio/5; 
    //e. Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
    descuentoAlCaro= precioMaximo - precioMaximo*0.1;

  	document.write("el importe mas bajo es: "+precioMinimo+ " de "+ paisOrigen + " como pais de origen" + "<br>");//.a
	document.write("el importe mas alto es: "+precioMaximo+ " de la marca "+ marcaMasCara + "<br>");//b.
	document.write("El promedio de su importe es: "+promedioImporte+ "<br>");//c.
	document.write("La cantidad de productos de China es: "+contadorChina+ "<br>");//d.
	document.write("El importe final posterior al descuento de 10% sobre el importe mas alto es : "+ descuentoAlCaro + "<br>"); //.e
}	

