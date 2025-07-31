// http nos permite tratar con protocolos http y conexiones, como por ejemplo un servidor a travez de http, etcc..

const http = require('node:http');
const picocolors = require('picocolors');
const { buscarPuertoLibre } = require('./appPuertoLibre');

// el server hace dos cosas resivir una peticion y devolver una respuesta.
// -- para eso estan los dos parametros
const server = http.createServer((req, res) => {
    console.log(picocolors.bgCyan('Respuesta resivida'));
    res.end('hola mundoooo C:');
});


// // pero antes de ejecutarse el callback primero necesita ser escuchado mediante un puerto.
// server.listen(0, () => { // el 0 especifica que escojera un puerto libre
//     // -- server.address().port recoletando el puerto que selecciono
//     console.log(`Servidor escuchado del puerto: http://localhost:${server.address().port}`);
// })

// -- magia de NODE por que esta basado en eventos se puede escuchar todo eso.

async function devolverPuerto(port) {
    try {
        const respuesta = await buscarPuertoLibre(port);

        server.listen(respuesta, () => { // el 0 especifica que escojera un puerto libre
            // -- server.address().port recoletando el puerto que selecciono
            console.log(`Servidor escuchado del puerto: http://localhost:${server.address().port}`);
        })
    } catch (err) {
        console.log('El error es: ', err);
    }
}

devolverPuerto(3001);