// 3. Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.

const numeros = [2, 3, 5, 10]

const duplicar = x => x * x

const resultado = numeros.map(duplicar)
console.table(resultado)





  