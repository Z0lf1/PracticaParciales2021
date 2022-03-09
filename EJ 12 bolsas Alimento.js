/*

Realizar el algoritmo que permita el ingreso de 10 bolsas
de alimento por prompt,
con los kilos (validar entre 0 y 500), 
sabor validar(carne vegetales pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor
carne*/

function mostrar()
{ 
    var cantidadBolsas=0;
    var kilos;// (validar entre 0 y 500), 
    var sabor;//(carne vegetales pollo) e informar por alert:
    var acumuladorKilos=0;
    var promedioKilos;
    var pesoLiviano;
    var saborLiviano;
    var banderaPesoMinima=false;
    var contadorCarne=0;
    var acumuladorCarne=0;
    while(cantidadBolsas<10)
    {
        sabor=prompt("Ingrese sabor carne vegetales pollo");
        while(sabor!="carne"&&sabor!="vegetales"&&sabor!="pollo")
        {
            sabor=prompt("Error Ingrese sabor carne vegetales pollo");
        }

        kilos=prompt("Ingrese peso en kilos");     
        kilos=parseInt(kilos);
        while(isNaN(kilos)||kilos<0||kilos>500)
        {
            kilos=prompt("Ingrese peso en kilos");     
            kilos=parseInt(kilos);       
        }
       if(sabor==carne)
       {//c) La cantidad de sabor carne y el promedio de kilos de sabor carne
        contadorCarne++;
        acumuladorCarne+=kilos;
       }
       if(kilos < pesoLiviano || banderaPesoMinima == false)
        {//b) El mas liviano y su sabor
            pesoLiviano = kilos;
            saborLiviano=sabor;
            banderaPesoMinima = true;
        }
        acumuladorKilos+=kilos;
        contador++;
    }
    //a) El promedio de los kilos totales.
    promedioKilos= acumuladorKilos/10;
    //c) La cantidad de sabor carne y el promedio de kilos de sabor carne
    promedioKilosCarne= acumuladorCarne/contadorCarne;
    mensaje="El promedio de los kilos totales es"+ promedioKilos +"\n";
    mensaje+="El mas liviano es de "+pesoLiviano +" kilos y su sabor es "+ saborLiviano +"\n";
    mensaje+="La cantidad de sabor carne es"+ acumuladorCarne+"y el promedio general de kilos del sabor es "+promedioKilosCarne+"\n";
    mensaje=
    aler(mensaje);
}  