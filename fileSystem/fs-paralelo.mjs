// ejecutar procesos al mismo tiempo y traer ambos resultados. mas rapido. por que los lee al mismo tiempo. con MJS

import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./archivo1.txt', 'utf8'),
    readFile('./archivo2.txt', 'utf8'),
]).then(([value1 , value2]) => {
    console.log('Ejecucion 1 ', value1);
    console.log('Ejecucion 2 ', value2);
})

// -- dato importante MJS si tiene las posibilidad de ejecutar async await en el cuerpo.
