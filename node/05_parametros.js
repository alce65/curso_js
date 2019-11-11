const suma = function (a = 0, b = 0)  {
    // let a = 0
    // let b = 0
    return a + b
}


const division = function (a = 0, b = 0)  {

    return a / b
}

console.log(suma())
console.log(suma(3))

console.log(division(10, 100))


console.log(suma(3, 4, 6, 8))


const sumaMuchos = function (a = 0, b = 0, ...mas)  {
    console.log(mas)
    return a + b
}

console.log(sumaMuchos(30, 40, 60, 80))