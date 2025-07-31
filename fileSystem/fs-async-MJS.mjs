// leer con async await pero con MJS en el mismo cuerpo si funciones asincronas

import { readFile } from 'node:fs/promises';

console.log('Leyendo el primer archivo ...');

const arch = await readFile('./archivo1.txt', 'utf8');
console.log('Ejecucion 2 ', arch);

console.log('----> Hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo');

const arch2 = await readFile('./archivo2.txt', 'utf8');
console.log('Ejecucion 2 ', arch2);

// -- dato importante MJS si tiene las posibilidad de ejecutar async await en el cuerpo.
