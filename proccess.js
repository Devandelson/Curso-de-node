let picocolors = require('picocolors');

// -- esta funcion o objeto global que permite controlar la informacion que pasa por node.

//-- argumento de entrada
// console.log(process.argv[1]); // permite ver los argumentos o procesos por los que pasa tu ejecucion.

// process.exit(1); // permite la manera en la cual salimos de un proceso.
// - 0 que salga y ya
// - 1 que salga pero que diga si hay error.

// podemos controlar tambien eventos del proceso
process.on('exit' , () => {
    // cuando termine por ejemplo limpiar recursos.
});

// current workin directory (cwd) -- nos dice desde donde estamos ejecutando codigo
console.log(picocolors.blue(process.cwd()));