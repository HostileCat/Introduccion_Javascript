// 20. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resuelta');
    }, 1000); 
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resuelta');
    }, 2000); 
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resuelta');
    }, 3000); 
});


Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log('Todas las Promises han sido resueltas');
    console.log(values); 
}).catch((error) => {
    console.error('Hubo un error en una de las Promises', error);
});