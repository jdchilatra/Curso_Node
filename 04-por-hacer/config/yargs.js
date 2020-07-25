const descripcion = {
    demand:true,
    alias:"d"
}

const completado={
    default:true,
    alias:"c"
}

const argv = require("yargs")
.command(
    "crear",
    "crea una tarea",
    {
        descripcion
    }
)
.command(
    "listar",
    "lista las tareas",
    {
        
    }

)
.command(
    "actualizar",
    "actualiza una tarea",
    {
        descripcion,
        completado
    }
)
.command(
    "borrar",
    "borra una tarea",
    {
        descripcion,
    }
)
.help()
.argv;


module.exports = {
    argv
}