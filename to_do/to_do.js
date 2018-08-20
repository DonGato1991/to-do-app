const fs = require('fs');

let listaPorHacer = [];

let guardar = () => {

    let data = JSON.stringify(listaPorHacer);

    fs.writeFile('db/data.json', data, err => {
        if (err)
            throw new Error('Se produjo un error al guardar nota.', err);
    });
}


let getListado = () => {
    cargar();
    return listaPorHacer;
}


const cargar = () => {
    try {
        listaPorHacer = require('../db/data');
    } catch (error) {
        listaPorHacer = [];
    }
}


let crear = (descripcion) => {
    cargar();
    let tareaPorHacer = {
        descripcion,
        completado: false
    }
    listaPorHacer.push(tareaPorHacer);
    guardar();
    return tareaPorHacer;
}


let actualizar = (descripcion, completado = true) => {
    cargar();
    let index = listaPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listaPorHacer[index].completado = completado;
        guardar();
        return true;
    } else {
        return false;
    }
}


let borrar = (descripcion) => {
    //Metodo Propio
    // cargar();
    // let index = listaPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    // if (index >= 0) {
    //     listaPorHacer.splice(index, 1);
    //     guardar();
    //     return true;
    // } else {
    //     return false;
    // }

    //Metodo Udemy
    cargar();
    let nuevoListado = listaPorHacer.filter(tarea => {
        if (tarea.descripcion != descripcion) {
            return tarea;
        }
    });

    if (nuevoListado.length == listaPorHacer.length) {
        return false;
    } else {
        listaPorHacer = nuevoListado;
        guardar();
        return true;
    }
}
module.exports = { crear, getListado, actualizar, borrar }