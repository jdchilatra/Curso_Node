const fs = require('fs');
const colors = require("colors")

let listarTabla = (base,limite) =>{
    return new Promise((resolve,reject) => {
        let data=""
        if (!Number(base)){
            reject("NAN")
            return; //el codigo sigue
        }
        for(let i=0;i<=limite;i++){
            console.log(`${base} * ${i} = ${base*i} `.blue)
        }
        resolve("")
        
    })
}

let crearArchivo = (base,limite) =>{
    return new Promise((resolve,reject) => {
        let data=""
        if (!Number(base)){
            reject("NAN")
            return; //el codigo sigue
        }
        for(let i=0;i<=limite;i++){
            data+=`${base} * ${i} = ${base*i} \n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`,data,
            (err) => {
            if (err){
                reject(err)
            }else{
                resolve(`tabla-${base}.txt`)
            }
        }
        )
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
