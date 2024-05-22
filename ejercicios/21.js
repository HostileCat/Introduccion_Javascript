// 21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resuelta');
    }, 1000); 
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2 rechazada');
    }, 2000); 
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resuelta');
    }, 3000); 
});

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    console.log('Resultados de todas las Promises:');
    console.table(results);
});



  