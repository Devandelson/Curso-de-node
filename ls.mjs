import fs from 'node:fs/promises';

// // Comando Ls es para ver el nombre o que es lo que esta dentro de algo como dir de cmd solo que en NODE JS. Common JS

// // el punto significa que leera unicamente el directorio
// fs.readdir('.', (err, value) => {
//     if (err) {
//         console.log('Ha pasado un error con la lectura: ', err);
//         return;
//     }

//     value.forEach((file) => {
//         console.log(file);
//     })
// })

// -- Ahora con MJS
fs.readdir('.')
    .then(files => {
        files.forEach((file) => {
            console.log(file);
        })
    }).catch(err => {
        if (err) {
            console.log('Error ', err);
            return;
        }
    });
