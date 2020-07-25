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
///prueba 1
/*  
let getEmpleado = (id, callback) => {
    let empleado_db = empleados.find( empleado => { //se usa el método find para 
        return empleado.id === id
    })

    if (!empleado_db){
        callback (`no existe ID ${id}`)
    }else{
        callback(null,empleado_db)
    }
}
getEmpleado(20, (err,empleado_db) => {
    if (err) {
        console.log(err)
    }else{
        console.log(empleado_db)
    }
})
*/

//prueba2

let getSalario = (nombre_empleado , callback) => {
    let id_db = empleados.find(empleado => empleado.nombre == nombre_empleado)
    if (!id_db){
        callback("No se encotró el empleado")
    }else{
        let salario_db = salarios.find(salario => salario.id === id_db.id)

        if (!salario_db){
            callback("No se encontró el salario")
        }else{
            let result = {
                nombre : nombre_empleado,
                salario : salario_db.salario
            }
            callback(null,result)
        }
    }
    

    
}
getSalario("david", (err,salario) => {
    if (err) {
        console.log(err)
    }else{
        console.log(salario)
    }
})


