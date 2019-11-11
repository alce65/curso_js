// Declaracion de una funcion
function suma (a, b) {
    return a + b
}

// Inicializacion de funciones
const resta = function (a, b) {
    return a - b 
}

// Funciones arrow en ES6
// const producto = (a, b) => { return a * b}
// Forma compacta
const producto = (a, b) => a * b
const cuadrado = a => a * a


// Uso de la funcion 

let n1 = 23
let n2 = 43
console.log(suma(n1, n2))
console.log(resta(n1, n2))