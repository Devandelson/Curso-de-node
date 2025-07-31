// en esta ocasion lo mismo con file system (fs) pero con asyn await con la version de Common JS
// - que recuerda que Common JS es un patron de diseno que utiliza require no import ni export.

const fileSystem = require('node:fs/promises');

// (() => {
// })()

// a esta vellesa se le llama funcion auto invocada envolbi una funcion de tipo flecha en un parentesis para luego otro parentesis afuera para que se ejecute.


(async () => {
    console.log('Leyendo el primer archivo ...');

    const arch = await fileSystem.readFile('./archivo1.txt', 'utf8');
    console.log('Ejecucion 2 ', arch);

    console.log('----> Hacer cosas mientras lee el archivo...');

    console.log('Leyendo el segundo archivo');
    
    const arch2 = await fileSystem.readFile('./archivo2.txt', 'utf8');
    console.log('Ejecucion 2 ', arch2);
})()

// -- dato importante Common Js no utiliza asyn await en el mismo cuerpo tienes que envolverlo en algo para poder utilizarlo
