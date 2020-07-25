console.log("inicio del programa")

setTimeout(
    function(){
        console.log("primer timeout")
    },
    3000
)

setTimeout(
    function(){
        console.log("segundo timeout")
    },
    0
)
setTimeout(
    function(){
        console.log("tercer timeout")
    },
    0
)

console.log("Fin programa")

/* ciclo de vida de procesos en node
inicio del programa
Fin programa   
segundo timeout
tercer timeout 
primer timeout
*/