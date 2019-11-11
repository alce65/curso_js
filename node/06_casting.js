// Depende de la exprexion

// Casting a number
let n1 = 33
let n2 = '3'

console.log(n1 / n2) // n2 hace casting a number

console.log(typeof n2)

n2 = 'Pepe'
console.log(n1 / n2) 
n2 = true
console.log(n1 / n2) 
n2 = false
console.log(n1 / n2) 
console.log(-n1 / n2) 


// Casting a String

let cadena1 = 'Hola'
let cadena2 = ' Amigo'

console.log(cadena1 + cadena2)

cadena1 = 23
cadena2 = '32'

console.log(cadena1 + cadena2)

console.log(Number(cadena1) + Number(cadena2))

cadena1 = true
console.log(cadena1 + cadena2)

// Casting a Boolean

// Falsy
console.log(false)
console.log( !!0 )
console.log( !!NaN )
console.log( !!'' )
console.log( !!undefined )
console.log( !!null )
console.log('--------')
// Truly
console.log( !!1230 )
console.log( !!'Hola' )
console.log( !![])
console.log( !!{})