
const fs = require("fs");

let listadoPorHacer = [];

const crear = (descripcion) => {
    cargarDb();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push( porHacer );
    guardarDb();
    return porHacer
}

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile("./DB/data.json",data,(err) => {
        if (err){
            console.log ("problema")
        }
    })

}

const cargarDb = () => {
    try{
        listadoPorHacer = require("../DB/data.json"); 
    }catch{
        listadoPorHacer=[]
    }
    
}

const getListado = () => {
    cargarDb()
    return listadoPorHacer;
}

const actualizar = (descripcion,completado) => {
    cargarDb();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion) //-1 si no lo encontró
    if (index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true
    }else{
        return false
    }
}

const borrar = (descripcion) => {
    cargarDb()
    let nuevas_tareas = listadoPorHacer.filter((listado) => listado.descripcion != descripcion)
    listadoPorHacer = nuevas_tareas;
    guardarDb();
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}