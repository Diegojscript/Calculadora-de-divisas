var usuario = parseInt(prompt("Ingresa tu monto aca"));
/*Todos los valores que escribe el usuario los navegadores, por defecto, los traen como texto, como
<string>. Si se quiere usar valores de texto como numero se debe convertir con la etiqueta parseInt.
Este tambien redondea los numeros con decimales en enteros*/ 
var dolar_usuario = parseInt(usuario).toFixed(2);
//toFixed(Nº) se usa para mostrar cierta cantidad de decimales
var dolar_monitor = 5.84;   
var dolar_today = 5.75;
var dolar_bcv = 5.48;
var dolar_paypal = 5.13;
//En Js = significa asinar un valor 
var dolar_usdt = 5.85;
var signo = "Bs";
var resultado_final;
var tasa;
// la etiqueta \n se utiliza para separar lineas en el codigo Js
var tangente = prompt("¿Cual tasa deseas?\n 1 es Monitor\n 2 es Dolartoday\n 3 es BCV\n 4 es PayPal\n 5 es Usdt");
    //ParseFloat para utilizar decimales (sin limites)
if (tangente == 1) /*if --> Si. Ejemplo: si la condicion (x) se cumple*/
// En Js == se usa para marcar una comparacion, en este casp es si/no 
{
    tasa = "Monitor";
    resultado_final = dolar_monitor * dolar_usuario;
    document.write("Tu monto en la tasa de " + tasa + " es <strong>" + resultado_final + "<strong> " + signo)
}
else if (tangente == 2) /*Al utilizar varias condicionales se utiliza el codigo else if. Ejemplo
Si la condicion (x) no se cumple la (y)*/ 
{
    tasa = "DolarToday"
    resultado_final = dolar_today * dolar_usuario;
    document.write("Tu monto en la tasa de " + tasa + " es <strong>" + resultado_final + "<strong> " + signo)
     //HTML en Js se coloca dentro de comillas
}
else if (tangente == 3)
{
    tasa = "BCV";
    resultado_final = dolar_bcv * dolar_usuario;
    document.write("Tu monto en la tasa de " + tasa + " es <strong>" + resultado_final + "<strong> " + signo)
    
}
else if (tangente == 4)
{
    tasa = "PayPal";
    resultado_final = dolar_paypal * dolar_usuario;
    document.write("Tu monto en la tasa de " + tasa + " es <strong>" + resultado_final + "<strong> " + signo)
}
else if (tangente == 5)
{
    tasa = "USDT";
    resultado_final = dolar_usdt * dolar_usuario;
    document.write("Tu monto en la tasa de " + tasa + " es <strong>" + resultado_final + "<strong> " + signo)
}
else /*else, codigo utilizado si ninguna de las condiciones se cumple*/
{
    document.write("Hazlo bien, mamaguevo")
}