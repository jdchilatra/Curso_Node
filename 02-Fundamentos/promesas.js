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

////Simulación de DB
/// Ej1
/*
let getEmpleado = (id) => {

    return new Promise((resolve,reject) => {
        let empleado_db = empleados.find( empleado => { //se usa el método find para 
            return empleado.id === id
        })
    
        if (!empleado_db){
            reject (`no existe ID ${id}`)
        }else{
            resolve(empleado_db)
        }
    })  
}

getEmpleado(10)
.then(empleado => console.log(empleado),
(err) => console.log(err))
*/
 //Fin Ej 1


 // Ej 2
 /*
 let getSalario = (nombre_empleado , callback) => {
     return new Promise (
        (resolve,reject) => {
        let id_db = empleados.find(empleado => empleado.nombre == nombre_empleado)
        if (!id_db){
            reject("No se encotró el empleado")
        }else{
            let salario_db = salarios.find(salario => salario.id === id_db.id)

            if (!salario_db){
                reject("No se encontró el salario")
            }else{
                let result = {
                    nombre : nombre_empleado,
                    salario : salario_db.salario
                }
                resolve(result)
            }
        }
     })  
}
getSalario("david")
.then(
    (salario) => console.log(salario),
    (err) => console.log(err)
)
*/
 // Fin Ej 2

 
 /*Ej3*/
 /*
let getEmpleado = (id) => {

    return new Promise((resolve,reject) => {
        let empleado_db = empleados.find( empleado => { //se usa el método find para 
            return empleado.id === id
        })
    
        if (!empleado_db){
            reject (`no existe ID ${id}`)
        }else{
            resolve(empleado_db)
        }
    })  
}

 let getSalario = (empleado , callback) => {
     return new Promise (
        (resolve,reject) => {
        let salario_db = salarios.find(salario => salario.id === empleado.id)

        if (!salario_db){
            reject("No se encontró el salario")
        }else{
            let result = {
                nombre : empleado.nombre,
                salario : salario_db.salario
            }
            resolve(result)
        }
        
     })  
}

getEmpleado(3)
.then(empleado => {
    getSalario(empleado)
    .then((salario) => {
        console.log(salario)
    },
    err => console.log(err))
},
(err) => console.log(err))
*/
//Fin Ej 3

//Ej 4  prmesas encadenadas
let getEmpleado = (id) => {

    return new Promise((resolve,reject) => {
        let empleado_db = empleados.find( empleado => { //se usa el método find para 
            return empleado.id === id
        })
    
        if (!empleado_db){
            reject (`no existe ID ${id}`)
        }else{
            resolve(empleado_db)
        }
    })  
}

 let getSalario = (empleado , callback) => {
     return new Promise (
        (resolve,reject) => {
        let salario_db = salarios.find(salario => salario.id === empleado.id)

        if (!salario_db){
            reject("No se encontró el salario")
        }else{
            let result = {
                nombre : empleado.nombre,
                salario : salario_db.salario
            }
            resolve(result)
        }
        
     })  
}

getEmpleado(10)
.then( empleado => getSalario(empleado))
.then( salario => console.log(salario))
.catch((err) => console.log(err))


//Fin Ej 4