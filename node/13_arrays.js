const datos = [4, 70, 99]

datos[datos.length] = 56
// datos[12] = 34


// Metodos mutables
datos.push(34, 78, 65)
console.log(datos)

// Metodos inmutables
let cadena = datos.join(' - ')
console.log(cadena)
console.log(datos)

// Metodos mutables
// Primero CLONAMOS el Array
let datosInicial = datos.slice()


datos.sort( (a,b) => a-b)
console.log('Array ordenado', datos)

// Funciones callback


function suma(a,b) {return a+b}
function mostrar(txt) {console.log(txt)}

mostrar(suma(3,6))


function calcularMostrar(a, b, callback) {
    console.log(callback(a,b))
}

calcularMostrar(5, 8, suma)

calcularMostrar(5, 8, function (a,b) { return a-b})

calcularMostrar(5, 8, (a,b) => a * b )

console.log('Array original', datosInicial)

//// Fragmentos de Array

datos.slice() // Inmutable
let trozo = datos.splice(2, 2) // Mutable : extrae datos
console.log(datos)
console.log (trozo)

console.clear()
/// Funciones con callbacks para arrays

datos.forEach(
    (item, i) =>  console.log(`La posicion ${i} vale ${item}`)
);

let cuadrados = datos.map( item => item * item )
console.log(cuadrados)
console.log(datos)
let clonDatos = datos.map(item => item)