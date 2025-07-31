// a partir de node 16, cuando se requiere un modulo se coloca primero node: y luego el modulo
const fileSystem = require('node:fs'); // (FS)

// Version 1 fichero -- propiedades de un archivo ***********************************
const stats1 = fileSystem.statSync('./archivo1.txt'); // para ver propiedades de un archivo de forma sincrona

console.log(
    stats1.isFile(), // si es un archivo
    stats1.isDirectory(), // si es un directorio
    stats1.isSymbolicLink(), // si es un enlace simbolico (se parece a un enlace directo)
    stats1.size // size in bytes
);


