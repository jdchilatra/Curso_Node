// function sumar (a,b){
//     return a+b;
// }

let sumar = (a,b) => { //estructura de función flecha para codigo de más de una linea
    return a+b;
}

let restar = (a,b) => a-b //estructura de una fucnion flecha para ejecutar solo una linea 

let saludar = () => "Hola mundo" 

let nombre = nombre => `Hola ${nombre}` //estructura que se puede usar cuando solo se recive un parametro

console.log(restar(10,20))
console.log(saludar())
console.log(nombre("david"))

