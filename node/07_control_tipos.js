
// Estructura de control if

let x = 2
//x = 'Pepe'

if (x === '2') {
    console.log('Ok')
} else {
    console.log('Error')
}


function suma(a = 0, b = 0) {

    if ( isNaN(a) || isNaN(b) ) {
        return 'operacion invalida'
    } 
    /* else {
       return +a + +b
    }  */

    return +a + +b
}
    

console.log(suma(2,4)) // 6
console.log(suma(2,-4)) // -2
console.log(suma(2,0)) // 2
console.log(suma(2,'2')) // 4
console.log(suma(2,'Pepe')) // Error