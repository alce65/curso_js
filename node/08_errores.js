
function suma(a = 0, b = 0) {
    if ( isNaN(a) || isNaN(b) ) {
        throw(new Error('operacion invalida'))
    } 
    return +a + +b
}


try {
    console.log(suma(2,2))
    console.log(suma(2,'Pepe'))
} catch (e) {
    console.log(e.message)
}

