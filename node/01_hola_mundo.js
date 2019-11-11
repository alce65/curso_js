

// Datos y variables
// Tipado debil y dinámico

// Tipos de datos elementales, primitivos (o escalares)

'Hola Mundo' // string
23 // number
true // boolean
false // boolean
undefined // undefined

{nombre: 'Pepe'} // object
[3, 5, 1, 6] // object - array

// Variables en ES6
// let sustituye a var

let dato
console.log(typeof dato, dato)
dato = 'Hola mundo'
console.log(typeof dato, dato)
dato = 32
console.log(typeof dato, dato)
dato = 32.56
console.log(typeof dato, dato)
dato = true
console.log(typeof dato, dato)
dato = {
    nombre: 'Pepe', 
    edad: 23, 
    isAlumno: true, 
    direccion: {calle: 'Pez', ciudad: 'Cadiz'} 
}
console.log(typeof dato, dato)
dato = ['Leer', 'Pasear', 'Bailar']
console.log(typeof dato, dato)