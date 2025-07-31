// Node tiene modulos para el sistema de archivos, internet entre otros, como paquetes integrados.
// y OS es uno que te ofrece info del sistema operativo y mas cosas relacionadas al mismo.
// con CJS Common JS

const os = require('node:os');

// console.log('');
console.log('Info del sistema operativo:');
console.log('-------------------------');

console.log('Nombre del sistema operativo ', os.platform());
console.log('Version del sistema operativo ', os.release());
console.log('Arquitectura', os.arch());
console.log('CPUs', os.cpus());
console.log('Memoria Libre', os.freemem() / 1024 / 1024);
console.log('Memoria Total', os.totalmem / 1024 / 1024);
console.log('Cuantos dias lleva tu pc encendido', os.uptime() / 60 / 60);