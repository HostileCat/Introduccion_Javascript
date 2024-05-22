// 16. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.


function promise1() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(1);
      }, 1000);
  });
}

function promise2() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(2);
      }, 1000);
  });
}

function promise3() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(3);
      }, 1000);
  });
}

promise1()
  .then(result1 => {
      return promise2().then(result2 => {
          return result1 + result2;
      });
  })
  .then(result12 => {
      return promise3().then(result3 => {
          return result12 + result3;
      });
  })
  .then(finalResult => {
      console.log("Resultado final:", finalResult); 
  });