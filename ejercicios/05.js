// 5. Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true


const numeros = [-5, -8, -19, -22];


const sonNegativos = x => x < 0;


const resultado = numeros.every(sonNegativos);

console.log(resultado);