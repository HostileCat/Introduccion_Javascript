// 7. Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined


const numeros = [2, 8, 19, 22, 0];


const primerImpar = x => x % 2 !== 0;


const resultado = numeros.find(primerImpar);

console.log(resultado);