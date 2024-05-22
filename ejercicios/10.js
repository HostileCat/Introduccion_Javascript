// 10. Crear una función takeWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos hasta el primer callback que devolvió false
// • (Inverso del dropWhile)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];

const imprimirAntes = n => n < 5;


const resultado = _.takeWhile(numeros, imprimirAntes);

console.log(resultado);