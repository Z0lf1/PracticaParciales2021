/* 2
HISOPADO
 El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-Nacionalidad ("argentina", "extranjero")
-Resultado ("positivo", "negativo")
-Edad (entre 18 y 65)
-Cepa("Delta", "Alfa", "Beta", "Ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a-Porcentaje de positivos 
b-Porcentaje de negativos
c-Cuál es la cepa menos encontrada
d-Edad del menor argentino contagiado
e-Cantidad de personas extranjeras contagiadas con la delta*/
			
function mostrar()
{
    var nacionalidad;// ("argentina", "extranjero")
    var resultado;// ("positivo", "negativo")
    var edad;// (entre 18 y 65)
    var cepa;//("Delta", "Alfa", "Beta", "Ninguna")
    var control;

    var contadorPositivos;
    var contadorNegativos;
    var banderaMinEdad;
    var edadMin;
    var porcentajePositivos;
    var porcentajePositivos;
    var contadorAlfa;
    var contadorBeta;
    var contadorDelta;
    var contadorDeltaExtrangeros;
    var mensajeCepa;

    contadorPositivos=0;
    contadorNegativos=0;
    contadorAlfa=0;
    contadorBeta=0;
    contadorDelta=0;
    contadorDeltaExtrangeros=0;

    control=0;
    banderaMinEdad=true;
    while(control<8)
    {
        nacionalidad=prompt("Ingrese nacionalidad argentina o extranjera");
        while(nacionalidad!="argentina"&&nacionalidad!="extranjera")
        {
            nacionalidad=prompt("ERROR. Ingrese nacionalidad argentina o extranjera");
        }
               
        edad=prompt("Ingrese edad");     
        edad=parseInt(edad);
        while(isNaN(edad)||(edad<18||edad>65))
        {
            edad=prompt("ERROR. Ingrese edad");
            edad=parseInt(edad);        
        }
        resultado=prompt("Ingrese resultado, positivo o negativo");
        while(resultado!="positivo"&&resultado!="negativo")
        {
            resultado=prompt("ERROR. Ingrese resultado valido");
        }
        
        if (resultado=="positivo")
        {
            cepa=prompt("Ingrese cepa delta,alfa o beta");
            while(cepa!="delta"&&cepa!="alfa"&&cepa!="beta")
            {
                cepa=prompt("ERROR. Ingrese opcion valida");
            }

            if (nacionalidad=="argentina") 
            {
                if(edad<edadMin || banderaMinEdad == true)
                {
                    edadMin = edad;
                    banderaMinEdad = false;
                }
            }
            
            contadorPositivos++;
        }
        else
        {
            //Para poder ingresar ninguna el resultado debe ser negativo
            cepa="ninguna";
            contadorNegativos++;
        }
        switch(cepa)
        {
            case "delta":
            if(nacionalidad=="extranjero")
            {//e-Cantidad de personas extranjeras contagiadas con la delta
             contadorDeltaExtrangeros++;   
            }
            contadorDelta++;
            break;
            case "alfa":
            contadorAlfa++;
            break;
            case "beta":
            contadorBeta++;
            break;
        }
        control++;
    }//FIN WHILE GENERAL

    porcentajePositivos= contadorPositivos* 100/8;//Porcentaje de positivos 
    PorcentajeNegativos= contadorNegativos*100/8;//Porcentaje de negativos
    if(contadorAlfa < contadorBeta && contadorAlfa < contadorDelta)
    {//c-Cuál es la cepa menos encontrada
        mensajeCepa = "Alfa";
    }
    else
    {
        if(contadorBeta < contadorDelta)
        {
            mensajeCepa = "Beta";
        }
        else
        {
            mensajeCepa = "Delta";
        }
    }
    document.write("Porcentaje de positivos " + porcentajePositivos + "<br>");
    document.write("Porcentaje de negativos " + PorcentajeNegativos + "<br>");
    document.write("El menos precente es: "+mensajeCepa + "<br>");
    document.write("Edad del menor argentino contagiado " +edadMin + "<br>");
    document.write("Cantidad de personas extranjeras contagiadas con la delta: "+contadorDeltaExtrangeros +"<br>");
} 