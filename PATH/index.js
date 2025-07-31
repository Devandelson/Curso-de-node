const path = require('node:path');

// barra separadora de espacios entre carpetas segun el sistema operativo
// LINUX (\) Windows (/).
console.log(path.sep);

// unir rutas con path.join; para los diferentes SO(sistema operativo).
const filePath = path.join('content', 'subcontent', 'text.txt');

const base = path.basename(filePath);
console.log(base);

const filename = path.basename(filePath, '.txt'); // quita el txt y te da el nombre del archivo seleccionado.
console.log(filename);

const extension = path.extname(filePath); // te da la extencion de un archivo.
console.log(extension);