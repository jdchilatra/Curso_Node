// setTimeout(
//      () => {
//         console.log("HW")
//     },
//     3000
// )


let getUsuarioById = (id, callback) => { //uso de callbacks como en los modulos de node
    let usuario ={
        nombre: "fernando",
        id
    }
    if (id === 10){
        callback("no existe")
    }else{
        callback(null,usuario);
    }
    
}
getUsuarioById(20,(err,usuario) => {
    if (err){
        console.log(`usuario `,err)
    }else{
        console.log(`usuario `,usuario)
    }

    
})