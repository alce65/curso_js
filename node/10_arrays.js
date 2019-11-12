
function crearObjetos() {
    let datos = []
    let masDatos = new Array()
    let obj = {}
    let obj2 = new Object()
    let fecha = new Date('1969-3-21')
    console.log(fecha)    
}


for (let index = 0; index < 10; index++) {
    console.log(index)
}

let datos = [2, 4, 6, 8, 10, 12, 14, 16]
console.log(datos[0])

console.clear()

for (let i = 0; i < datos.length; i++) {
    const item = datos[i];
    console.log(`La posion ${i} vale ${item}`)
}

function media(datos) {
    let suma = 0
    for (let i = 0; i < datos.length; i++) {
        const item = datos[i];
        suma = suma + item
    }
    return suma / datos.length 
}


let numbers = [12, 33, 54, 32, 76]

console.log(media(datos))
console.log(media(numbers))

// En ES6 hay un nuevo bucle

let tot = 0
for (const item of numbers) {
    tot = tot + item
}
console.log(tot)

let final = ''
let cadena = 'Un Anillo para gobernarlos a todos'
for (const item of cadena) {
    if (item != ' ') {
        final = final + item
    }  
}
console.log(final)
console.log(cadena[10])