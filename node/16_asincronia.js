// JS es un lenguaje Monohilo

console.log('Linea 1')
console.log('Linea 2')
console.log('Linea 3')
console.log('Linea 4')
let z = 1
setTimeout(
    () => {
        for (let index = 0; index < 100000000; index++) {
            z++
        }
        console.log(z)
    } , 0
)
console.log('Linea 5')
console.log('Linea 6')
console.log('Linea 8')
console.log('Linea 9')
console.log('Linea 10')
