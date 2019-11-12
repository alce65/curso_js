let cadena = 'Hola mundo'
let cadenaMal = "Hola mundo" // No es buena práctica
// ES6
let a = 'mundo'
let template = `Hola ${a}, que tal estas` // interpolación estática
a = 'amigo'

console.log(template)

console.log(cadena.toUpperCase())

let aCadena = cadena.split(' ')
console.log(aCadena)
let cadenaFinal = aCadena.join('')
console.log(cadenaFinal)