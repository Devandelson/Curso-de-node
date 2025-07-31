// Version 3 fichero -- leer asincrono (leer entre varias cosas dejando cosas pendientes y tomando otras hasta que termine el proceso pendiente y cuando termine lo retomo dejo otro y asi.) ***********************************************************************************
const fileSystem = require('node:fs'); // (FS)

console.log('Leyendo el primer archivo ...');

fileSystem.readFile('./archivo1.txt', 'utf8', (err, value) => {
    console.log('Ejecucion 1 ', value);
})

console.log('----> Hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo');

fileSystem.readFile('./archivo2.txt', 'utf8', (err, value) => {
    console.log('Ejecucion 2 ', value);
})

// el tercer argumento de "fileSystem" es un callback (lo que hace es que cuando termina un proceso asincrono ejecuta lo que se va a ejecutar cuando termine ese proceso.)

// Como es asincrono no tiene orden va leyendo mientras terminan otros procesos.