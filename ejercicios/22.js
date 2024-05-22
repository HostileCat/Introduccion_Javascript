// 22. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno.

async function operacionAsincronica(elemento) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Procesado el elemento: ${elemento}`);
            resolve(`Resultado de ${elemento}`);
        }, 1000); // 
    });
}

async function procesarLista(lista) {
    const resultados = [];
    for (const elemento of lista) {
        const resultado = await operacionAsincronica(elemento);
        resultados.push(resultado);
    }
    return resultados;
}

const listaDeElementos = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

procesarLista(listaDeElementos).then(resultados => {
    console.log('Todos los elementos han sido procesados');
    console.log(resultados);
});