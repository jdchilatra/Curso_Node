const opt={
    base:{
        demand:true, //obligatiro
        alias:"b"
    },
    limite:{
        alias:"l",
        default:10 //en caso de que no se pase el parametro
    }
}

const argv = require("yargs")
.command(
    "listar",
    "Imprime en consola la tabla de multiplicar",
    opt
)
.command(
    "crear",
    "Crea un txt",
    opt
)
.help()
.argv;

module.exports = {
    argv
}