// 19. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.

async function cargarYManipularDatos() {
    
    const response = await fetch('data2.json');
    
    const data = await response.json();
    
    const filteredData = data.filter(persona => persona.age >= 30).map(persona => ({
        nombre: persona.name,
        ciudad: persona.city
    }));
    
    console.log(filteredData);
    
}

cargarYManipularDatos();