// 1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.



// function imprimirNumeros(desde, hasta) { // Recibir dos parametros
//     let numero = desde; // Asignar el valor de "desde" a la variable "numero"
//     console.log("setInterval") 
//     /**
//      * Crear una variable y asignarle un setInterval que imprime la variable "numero" cada segundo.
//      */ 
//     const intervalId = setInterval(()=> { 
//         console.log(numero); // Imprimir la variable numero
//         if (numero === hasta) { 
//             clearInterval(intervalId); // Si el numero es igual a la variable "hasta", termina el intervalo
//         } else {
//             numero++; // Se incremeta el numero, si este no es igual a la variable "hasta"
//         }
//     }, 1000); // El intervalo se repite cada segundo
// }

function imprimirNumeros(desde, hasta) { //Recibir dos parametros
    console.log("setTimeout")
    function imprimir(numero) { //La funcion recibe como parametro el argumeto "desde", y se lo asigna a la variable numero
        console.log(numero); // Imprimir la variable numero

        /**
         * Si el numero sigue siendo menor que la variable "hasta" se ejecuta un setTimeout que ejecuta nuevamente la funcion "imprimir"
         */
        if (numero < hasta) { 
            setTimeout(imprimir, 1000, numero + 1); // Ejecuta la funcion imprimir despues de 1 segundo y pasa como argumento el "numero + 1"
        }
    }
    imprimir(desde); //ejecuta la funcion "imprimir"
}

let numero1 = parseInt(prompt("Ingrese el primer numero"))
let numero2 = parseInt(prompt("Ingrese el segundo numero"))


imprimirNumeros(numero1, numero2);




