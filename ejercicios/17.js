// 17. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.


fetch('data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
        

    function* generadorDeFibonacci() {
        let a = 0, b = 1;
        while (true) {
          yield a;
          [a, b] = [b, a + b];
        }
      }
      
      const fibonacci = generadorDeFibonacci();
      
      console.log(fibonacci.next().value); // 0
      console.log(fibonacci.next().value); // 1
      console.log(fibonacci.next().value); // 1
      console.log(fibonacci.next().value); // 2
      console.log(fibonacci.next().value); // 3
      console.log(fibonacci.next().value); // 5
      
      