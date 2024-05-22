// 14. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada". Utiliza async/await.

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function operacionAsincronica() {
  await delay(1000); 
  return "Operación completada"; 
}

operacionAsincronica().then(mensaje => console.log(mensaje)); 