// 15. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".

function promesaRechazada() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject(new Error("Promise rechazada"));
      }, 2000);
  });
}

promesaRechazada()
  .catch(error => console.log("Error:", error.message));