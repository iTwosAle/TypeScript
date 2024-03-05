//El primer bloque de código es el if, es decir, un si...
var animefav = "Mi anime favorito es boku no hero";
if (animefav == "Mi anime favorito es boku no hero") {
    console.log("Es el mejor anime que existe");
}
if (animefav != "Mi anime favorito es boku no hero") {
    console.log("No veas eso, mejor mira boku bno hero!");
}
//El segundo es el si, sino
var num1 = 6;
var num2 = 28;
if (num1 == num2) {
    console.log('Los números que se han ingresado son iguales');
}
else {
    console.log('Los números que se han ingresado son diferentes');
}
//Este bloque es el si, sino si, sino, y en este en especial define un número para la variable y se compara si este es negativo o positivo, o de lo contrario si no es ninguno es 0
var numero = 28;
if (numero < 0) {
    console.log("El numero ".concat(numero, " es Negativo"));
}
else if (numero > 0) {
    console.log("El numero ".concat(numero, " es Positivo"));
}
else
    console.log("EL Numero es Cero");
//Este bloque de código es para verificar errores
var a = 20;
var b = -9;
try {
    var f = a / Math.sqrt(b);
    console.log(f);
}
catch (error) {
    console.error(error);
}
finally {
    console.log('Operación Realizada');
}
//Este bloque de código es un bucle y mientras se itera, se suma uno a la variable de iteración y acaba en cuanto se cumpla la condición 
var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
var j = 1;
//Por otra parte, este es el  mismo, sin embargo este permite iterar primero una vez y luego comprobar la condición!
do {
    console.log(j);
    j++;
} while (j <= 10);
