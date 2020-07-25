/*

*/


//Ejercicio 1
/*
//async retorna una promesa

//let getNombre = async () => undefined.nombre    //provoca error
let getNombre = async () => "David"   //retorna el resultado
//let getNombre = async () => {throw new Error("No existe elnombre")}  //lanza un error perzonalizado  

getNombre() //cualquier error que haya en el método getNombre 
.then(
    (nombre) => console.log(nombre)
)
.catch(
    (err) => console.log("error: ",err)
)
*/

///Ejercicio 2

let getNombre = () => {
    return new Promise(
        (resolve,reject) => {
            setTimeout(
                () => resolve("David"),
                3000
            );
        }
    )
}

let saludo = async () => {
    let nombre = await getNombre()
    return `Nombre ${nombre}`
}

saludo()
.then(
    (mensaje) => console.log(mensaje)
)