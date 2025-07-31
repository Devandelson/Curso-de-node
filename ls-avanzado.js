const fs = require('node:fs/promises');
const path = require('node:path');

const folderSeleccionado = process.argv[2] ?? '.';
// -- ?? es como implementar un valor por defecto si el primario falla.
// -- argv ve todos los procesos que se van colocando en el node, entonces lo devuelve como un array y la segunda posicion (0,1,2). pertenece si colocamos directamente un comentario por que va leyendo todo los procesos del node tanto el PATH osea el enlace directo para ejecutar node, el fichero y si colocamos un mensaje tambien lo mostrara.

// fs.readdir(folderSeleccionado)
//     .then(lista => {
//         lista.forEach((fichero) => {
//             let rutaFichero = path.join(folderSeleccionado, fichero);
//             console.log(rutaFichero);

//             fs.stat(rutaFichero); // -- recuerda stat para ver propiedades del archivo.
//         })
//     }).catch(err => {
//         console.log('El error es: ', err);
//     });

// -- otra forma ahora con async await y para mostrar mas informacion con stat

async function ls(folder) {
    let ListArchive;
    // para controlar los errores de async se utiliza un try cath.

    try {
        ListArchive = await fs.readdir(folder);
    } catch (err) {
        console.log('No se encontro o hubo un error con ', ListArchive);
        process.exit(1); // para que salga controlado ya que ocurrio un error aqui.
    }

    const proccessInfoArchives = ListArchive.map(async (file) => {
        // -- para sacar informacion del archivo necesitamos su ruta.
        let rutaArchivo = path.join(folder, file); // se genera con path join para que no ocurra erorres con la barra separadora de carpetas \ o /.
        let archive;

        try {
            archive = await fs.stat(rutaArchivo);
        } catch {
            console.log('error');
            process.exit(1); // para que salga controlado ya que ocurrio un error aqui.
        }

        let size = archive.size.toString();
        let directory = archive.isDirectory() ? '▰' : '▱';
        let dateModified = archive.mtime.toLocaleString();

        return `${directory} > su size: ${size}, ${path.basename(rutaArchivo).padEnd(20)}, su fecha de modificación: ${dateModified}`;

        // pathEnd para que un string ocupe un espacio determinado
    });

    const filesInfo = await Promise.all(proccessInfoArchives);
    filesInfo.map((data) => console.log(data));
}

ls(folderSeleccionado);