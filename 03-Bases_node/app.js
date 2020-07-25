//const multiplicar = require("./multiplicar/multiplicar") 

const {crearArchivo, listarTabla} = require("./multiplicar/multiplicar")  //destructuring
const {argv} = require("./config/yargs")
const colors = require("colors")

let base = argv.base;
let limite = argv.limite;

console.log(argv)

switch (argv._[0]){
    case "listar":  
        listarTabla(base,limite)
        .then(archivo => console.log(``))
        .catch(err => console.log("No es un numero"))
        break;
    case "crear":
        crearArchivo(base,limite)
        .then(archivo => console.log(`Archivo creado ${archivo.blue}`))
        .catch(err => console.log("No es un numero"))
        break;
    default:

}



