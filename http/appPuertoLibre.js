const net = require('node:net'); // es lo mismo que http pero mas liviano.
const picocolors = require('picocolors');

async function buscarPuertoLibre(portDesigment) {
    return new Promise((resolve, rejects) => {
        const server = net.createServer();
        
        server.listen(portDesigment, () => {
            console.log(picocolors.green(`Tu puerto ${server.address().port} esta disponible`));
            const { port } = server.address();
            server.close(() => {
                resolve(port);
            })
        })

        server.on('error' , (err) => {
            if (err == 'EADDRINUSE') { // significa que el puerto no esta disponible.
                buscarPuertoLibre(0).then(port => {
                    resolve(port);
                })
            } else {
                rejects(err);
            }
        })
    })
}

module.exports = { buscarPuertoLibre }