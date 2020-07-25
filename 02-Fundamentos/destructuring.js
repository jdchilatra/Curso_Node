let deadpool = {
    nombre : "wade",
    poder : "regeneracion",
    getNombre : function(){
        return `${this.nombre} ${this.poder}`
    }
}

console.log(deadpool.getNombre())



let {nombre:primer_n , poder} =deadpool  //esto es conocido como destructuracion 
console.log(primer_n,poder)