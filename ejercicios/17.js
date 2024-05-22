// 17. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.


fetch('data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
        