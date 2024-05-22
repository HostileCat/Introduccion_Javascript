// 8. Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined

const numeros = [2, 8, 19, 22, 7];


const indexPrimer7 = x => x === 7;


const resultado = numeros.findIndex(indexPrimer7);

console.log(resultado);