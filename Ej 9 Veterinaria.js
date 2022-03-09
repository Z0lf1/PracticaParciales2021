/*Para una veterinaria se necesita un programa que 
permita ingresar datos de perros con su precio de vacunación
a pagar hasta que el cliente quiera. 
Por cada perro, se ingresa:
* raza: (validar "sharpei", "galgo", "pastor").
* nombre,
* edad (entre 1 y 25),
* peso (mas de 0),
* precio de consulta (desde 500 hasta 1500).

Se pide informar por alert:
a)El importe total a pagar por las vacunaciones, sin descuento.
b)El importe total a pagar con descuento (solo si corresponde)
Si se vacunan más de 2 perros, se obtiene
un 20% de descuento sobre el total a pagar.
Si se vacunan más de 4 perros, se obtiene
un 30% de descuento sobre el total a pagar.
c)La raza con más cantidad de perros
d)Nombre, raza y edad del perro más viejo ingresado
*/



function mostrar()
{
     var raza;// (validar "sharpei", "galgo", "pastor").
     var nombre;
     var edad;// (entre 1 y 25),
     var peso;// (mas de 0),
     var precioConsulta;// (desde 500 hasta 1500). v
     var acumuladorCosto=0;
     var contadorPerros=0;
     var respuesta=true;
     var contadorGal=0;
     var contadorShar=0;
     var contadorPas=0;
     var masPerros;
     var edadMax;
     var razaMax;
     var nombreMax;
     var banderaEdadMaxima = false;
     var descuento;
     var mensaje="";
     var valorDescuento;
     while(respuesta==true)
    {
        nombre=prompt("Ingrese nombre");

        raza=prompt("Ingrese raza sharpei,galgo,pastor");
        while(raza!="sharpei"&&raza!="galgo"&&raza!="pastor")
        {
           raza=prompt("Error Ingrese raza sharpei,galgo,pastor")
        }

        edad=prompt("Ingrese edad");     
        edad=parseInt(edad);
        while(isNaN(edad)||edad<1||edad>25)
        {
            edad=prompt("Ingrese edad");     
            edad=parseInt(edad);       
        }

        peso=prompt("Ingrese peso");
        while(peso<1)
        {
           peso=prompt(" error Ingrese peso mayor a cero");
        }
        precioConsulta=prompt("Ingrese precioConsulta");     
        precioConsulta=parseInt(precioConsulta);
        while(isNaN(precioConsulta)||precioConsulta<500||precioConsulta>1500)
        {
            precioConsulta=prompt("Ingrese precioConsulta");     
            precioConsulta=parseInt(precioConsulta);      
        }
        //a.El importe total a pagar por las vacunaciones, sin descuento.
        
        switch(raza)
        {
            case "sharpei":
            contadorShar++;
            break;
            case "galgo":
            contadorGal++;
            break;
            case "pastor":
            contadorPas++;
            break;
        }
        //Nombre, raza y edad del perro más viejo ingresado
        if(edad> edadMax || banderaEdadMaxima == false)
        {
            edadMax = edad;
            razaMax=raza;
            nombreMax=nombre;
            banderaEdadMaxima = true;
        }
        acumuladorCosto+=precioConsulta;    
        contadorPerros++;
        respuesta=confirm("Desea hacer otro ingreso?");
    } //FIN DEL WHILE GENERAL

    
    if(contadorPerros<3)
    {//b.El importe total a pagar con descuento (solo si corresponde)
        mensaje="No le corresponde descuento, paga la totalidad "+ acumuladorCosto;
    }
    else
    {
         if (contadorPerros<5)
         {//Si se vacunan más de 2 perros, se obtiene un 20% de descuento sobre el total a pagar.
            mensaje="El importe total a pagar con descuento"+ (acumuladorCosto - acumuladorCosto*20/100);
         }
         else
         {
                if (contadorPerros>4)
                 {//Si se vacunan más de 4 perros, se obtiene un 30% de descuento sobre el total a pagar.
                    mensaje="El importe total a pagar con descuento"+ (acumuladorCosto - acumuladorCosto*30/100);
                 }
             }
    }        
    if(contadorPas > contadorShar && contadorPas > contadorGal)
        {
            masPerros = "pastor";
        }
        else
        {
            if(contadorShar > contadorGal)
            {
                masPerros = "sharpei";
            }
            else
            {
                masPerros = "galgo";
            }
        }
    document.write("El importe total a pagar por las vacunaciones, sin descuento " + acumuladorCosto + "<br>");
    document.write( mensaje+ "<br>");
    document.write("La raza con más cantidad de perros es " + masPerros + "<br>");
    document.write("Del perro más viejo ingresado el nombre es: " +nombreMax  + ",su raza " +razaMax+" y su edad "+ edadMax+"<br>");
  
} 