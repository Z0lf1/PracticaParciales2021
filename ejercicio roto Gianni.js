
   /*
ANM 
Lo coso 

CONSULTA: Muestro los 4 valores referente a los 4 tipos de pago 
para  cada oferta o para una sola?
por que si es para las 4 no tiene sentido ingresar el metodo de pago.
Falta el cierre por esto.

Ejercicio 2:

La cadena de super mercados Coto nos pide un programa para manejar el stock 
de mercadería para así poder decidir mejor sus ofertas, para eso debemos poder ingresar:
Tipo de producto: fideos, galletitas, harina, jugo, vino (validar)
Cantidad de unidades: Como mínimo puede ser 1, y como máximo 6 unidades
Precio por unidad de producto: 100 pesos es el precio mínimo y 450 es el máximo precio disponible POR UNIDAD.
El método de pago: Crédito, Débito, Efectivo o MercadoPago
Coto nos pidió que solamente realizáramos la carga de 10 productos para ser ofertados durante el fin de semana, informar:
1) El total que se recaudaría con la venta de todas las ofertas
2) El precio bruto de cada oferta
3) Del producto COMESTIBLE más barato: nombre y precio
4) De la BEBIDA más cara: nombre y cantidad de unidades
5) El precio final de cada oferta teniendo en cuenta los siguientes descuentos:
	A) Si paga con efectivo: 45% de descuento 
	B) Si paga con tarjeta de crédito: 15% de aumento
	C) Si paga con debito el precio se mantiene igual
	D) Si paga con MercadoPago: 5% de descuento

ACLARACION: MercadoPago déjenlo y úsenlo como una sola palabra para que eviten confusiones.
*/

function mostrar()
{
		var nombreProducto;
		var tipoProducto;
		var cantidadUnidades;
		var precioUnidad;
		var metodoPago;
		var contadorIngreso;
		var acumuladorPrecio;
		var nombreOfertaUno;
		var costoOfertaUno;
		var nombreOfertaDos;
		var costoOfertaDos;
		var nombreOfertaTres;
		var costoOfertaTres;
		var nombreOfertaCuatro;
		var costoOfertaCuatro;
		var nombreOfertaCinco;
		var costoOfertaCinco;
		var nombreOfertaSeis;
		var costoOfertaSeis;
		var nombreOfertaSiete;
		var costoOfertaSiete;
		var nombreOfertaOcho;
		var costoOfertaOcho;
		var nombreOfertaNueve;
		var costoOfertaNueve;
		var nombreOfertaDiez;
		var costoOfertaDiez;
		var recaudacion;

		contadorIngreso=0;
		acumuladorPrecio=0;
		while(contadorIngreso>10)
			{
				tipoProducto=prompt("Ingrese el producto");//fideos, galletitas, harina, jugo, vino (validar)
				while(tipoProducto!="fideos"&&tipoProducto!="galletitas"&&tipoProducto!="harina"&&tipoProducto!="jugo"&&tipoProducto!="vino")
				{
					tipoProducto=prompt("Error Ingrese el producto, fideos, galletitas, harina, jugo, vino");
				}

				cantidadUnidades=prompt("Ingrese cantidad Unidades");		
				cantidadUnidades=parseInt(cantidadUnidades);
				while(isNaN(cantidadUnidades)||cantidadUnidades>0&&cantidadUnidades<7)
				{//Como mínimo puede ser 1, y como máximo 6 unidades
					cantidadUnidades=prompt("Ingrese cantidad Unidades, Como mínimo puede ser 1, y como máximo 6 unidades");		
					cantidadUnidades=parseInt(cantidadUnidades);
				}

				precioUnidad=prompt("Ingrese precio");
				precioUnidad=parseInt(precioUnidad);
				while(isNaN(precioUnidad)||precioUnidad>99&&precioUnidad<451)
				{//100 pesos es el precio mínimo y 450 es el máximo precio disponible POR UNIDAD
					precioUnidad=prompt("error Ingrese precio, 100 es el precio mínimo  y 450 es el máximo precio POR UNIDAD");
					precioUnidad=parseInt(precioUnidad);
				}
				metodoPago=prompt("Ingrese metodoPago");//El método de pago: credito, debito, efectivo o mercadoPago
				while(metodoPago!="credito"&&metodoPago!="debito"&&metodoPago!="efectivo"&&metodoPago!="mercadoPago")
				{
					metodoPago=prompt("Error ingrese metodoPago: credito, debito, efectivo o mercadoPago"); 
				}
				costo=precioUnidad*cantidadUnidades;
				
				switch(metodoPago)
				{// El precio final de cada oferta teniendo en cuenta los siguientes descuentos
					case "efectivo":
						costo = costo-costo*45/100;	
					break;
					case "credito":
						costo= costo+ costo*15/100;
					break;
					case "debito":
						costo=costo;
					break;
					default:
						costo= costo - costo*5/100;
					break;
				}
				switch(contadorIngreso)
				{// El precio bruto de cada oferta
					case 1:
					 	nombreOfertaUno=tipoProducto;
					 	costoOfertaUno=costo;
					break;
					case 2:
						nombreOfertaDos=tipoProducto;
					 	costoOfertaDos=costo;
					break;
					case 3:
						nombreOfertaTres=tipoProducto;
					 	costoOfertaTres=costo;
					break;
					case 4:
						nombreOfertaCuatro=tipoProducto;
					 	costoOfertaCuatro=costo;
					break;
					case 5:
						nombreOfertaCinco=tipoProducto;
					 	costoOfertaCinco=costo;
					break;
					case 6:
						nombreOfertaSeis=tipoProducto;
					 	costoOfertaSeis=costo;
					break;
					case 7:
						nombreOfertaSiete=tipoProducto;
					 	costoOfertaSiete=costo;
					break;
					case 8:
						nombreOfertaOcho=tipoProducto;
					 	costoOfertaOcho=costo;
					break;
					case 9:
						nombreOfertaNueve=tipoProducto;
					 	costoOfertaNueve=costo;
					break;
					case 10:
						nombreOfertaDiez=tipoProducto;
					 	costoOfertaDiez=costo;
					break;
				}
				if(tipoProducto=="fideos"||tipoProducto=="galletitas"||tipoProducto=="harina")
				{//Del producto COMESTIBLE más barato: nombre y precio
					if(costo<costoMinimo || banderaMinima == false)
					{
						costoMinimo = costo;
						tipoProductoMinimo=tipoProducto;
						banderaMinima = true;
					}
				}
				else
				{//De la BEBIDA más cara: nombre y cantidad de unidades
					if(costo>costoMaximo || banderaMaxima == false)
					{
						costoMaximo = costo;
						tipoProductoMaximo=tipoProducto;
						banderaMaxima = true;
					}	
				}
				
				acumuladorPrecio+=costo;
				contadorIngreso++;
		}

document.write(" " +  + " " +  + "<br>");
document.write(" " +  + " " +  + "<br>");
document.write(" " +  + " " +  + "<br>");
document.write(" " +  + " " +  + "<br>");
document.write(" " +  + " " +  + "<br>");
document.write(" " +  + " " +  + "<br>");
document.write(" " +  + " " +  + "<br>");
document.write(" " +  + " " +  + "<br>");
document.write(" " +  + " " +  + "<br>");
document.write(" " +  + " " +  + "<br>");
document.write(" " +  + " " +  + "<br>");
document.write(" " +  + " " +  + "<br>");
}