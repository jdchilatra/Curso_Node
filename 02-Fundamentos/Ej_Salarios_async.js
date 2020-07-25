let empleados =[
    {
        id: 1,
        nombre : "david"
    },
    {
        id: 2,
        nombre : "melissa"
    },
    {
        id: 3,
        nombre : "juan"
    }
]

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1000
    }
]

///simulacion de DB

let getNombre = async (id) => {
    let nombre = empleados.find((empleados) => empleados.id === id)
    if (!nombre){
        throw new Error ("No existe el empleado")
    }
    return nombre.nombre
}

let getSalario = async (id) => {
    let nombre = await getNombre(id)
    let salario = salarios.find((salarios) => salarios.id === id)
    if (!salario){
        throw new Error ("No se encontró el salario")
    }
    return {
        nombre,
        salario: salario.salario
    }
}

getNombre(1)
.then(
    (nombre) => console.log(nombre)
)

getSalario(30)
.then(
    (info) => console.log(`info persona:`,info)
)
.catch(
    (err) => console.log("No se encontró la información ",err)
)