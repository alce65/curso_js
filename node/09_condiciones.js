function calcular(a = 0, b = 0, op = '') {

    if (op == 'S' || op == 's' &&  ( !isNaN(a) &&  !isNaN(b) ) ) {
        return +a + +b
    } else if ( op == 'R' || op == 'r' &&  ( !isNaN(a) &&  !isNaN(b) ) )  {
        return a - b
    } else {
        return 'Operacion inválida'
    }
}


console.log(calcular(2, 5, 's'))
console.log(calcular(2, 'Pepe', 's'))
console.log(calcular(2, 5, 'R'))
console.log(calcular(2, 'Pepe', 'r'))
console.log(calcular(2, 5))


function calcular_2(a = 0, b = 0, op = '') {

    let r
    switch (op) {
        case 'S':
        case 's':   
            r =  +a + +b
            break
        case 'R':
        case 'r':
            r = +a - +b
            break
        default:
            r = 'Operacion inválida'
            break
    }

    return r
}



console.log(calcular_2(2, 5, 's'))
console.log(calcular_2(2, 5, 'R'))
console.log(calcular_2(2, 5))