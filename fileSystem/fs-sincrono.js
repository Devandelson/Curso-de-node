// Version 2 fichero -- leer un archivo sincrono **************************************
const fileSystem = require('node:fs'); // (FS)

const texto2 = fileSystem.readFileSync('./archivo1.txt', 'utf-8');
// - el UTF - 8 permite un lenguje en spanish que se entienda, y si no se coloca
// se veran numeros o directamente no se entiende
console.log(texto2);
