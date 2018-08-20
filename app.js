const argv = require('./config/config').argv;
const colors = require('colors');

const porHacer = require('./to_do/to_do');


let commado = argv._[0];

switch (commado) {
    case 'crear':
        let crear = porHacer.crear(argv.descripcion);
        console.log(crear);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('==============Tarea por Hacer================'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('============================================='.green);
        }
        console.log('Mostrar todas las notas por hacer');
        break;
    case 'actualizar':
        console.log('Actualizar una nota por hacer');
        let completado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Resultado: ', completado);
        break;
    case 'borrar':
        console.log('Borrar una nota por hacer');
        let borrado = porHacer.borrar(argv.descripcion);
        console.log('Resusltado: ', borrado);
        break;

    default:
        console.log('Opción no reconocida.');
        break;
}