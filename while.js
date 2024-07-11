
console.log("ESTE ES WHILE")
/*  Imprimir numeros del 0 al 10 en cosola 
 */let i = 0; 
while(i < 0){  /* Condición */
/*     Codigo a ejecutar
 */    console.log(i);
    i++;  /* Incremento */
}

/* <= >= == ===
 2 == "2"

 let arreglo = [];
 let userInput; 

 while(!(userInput=="")){
     userInput = prompt("Ingresa cualquier caracter:");
    arreglo.push(userInput);
}

 console.log("Tus valores fueron: " + arreglo) */

 
let contador = 0;
console.log("ESTE ES DO WHILE")
do{
    /* codigo a ejecutar */
    contador++; /*  Incremento  */
    console.log("Conteo: " + contador )
}
while( contador < 0);


/* Programa para mostrar los multiplos de 5 hasta un dado  while 
Programa que muestro los numeros del 1 al 50, si ambos son iguales, imprimir loteria  ==  */

console.log("Ejercicio 1")

let numero = parseInt(prompt("Ingresa un número:"));

let cont = 1;

while (cont <= numero) {
if (cont % 5 === 0) {
    console.log(cont);
}
cont++;
}

console.log("Ejercicio 2")

let numero1 = parseInt(prompt("Ingresa el primer número entre 1 y 50:"));
let numero2 = parseInt(prompt("Ingresa el segundo número entre 1 y 50:"));

let contador = 1;


while (contador <= 50) {
if (contador === numero1 || contador === numero2) {
    console.log(contador + " ¡Lotería!");
} else {
    console.log(contador);
}
contador++;
}