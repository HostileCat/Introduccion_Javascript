// 11. ¿Cuál es el resultado del código a continuación?


let i = 0

setTimeout(() => alert(i), 100); // El resultado es 100000000

for (let j = 0; j < 100000000; j++){
  i++
}