// 23. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.

async function cargarJSON() {
    try {
        const respuesta = await fetch('dat.json');
        
        if (!respuesta.ok) {
            throw new Error(`HTTP error! Status: ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        
        console.log('Datos obtenidos:', datos);
        
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error.message);
    }
}

cargarJSON();