const descripcion = { alias: 'd', demandOption: true };
const completado = { alias: 'c', default: true };


const argv = require('yargs')
    .command('crear', 'Comando utilizado para crear notas.', {
        descripcion
    })
    .command('actualizar', 'Comando utilizado para actualizar una tarea a completado', {
        descripcion,
        completado
    })
    .command('borrar', 'Comando utilizado para eliminar una tarea completa', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = { argv }