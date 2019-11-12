class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
        this.direccion = {
            calle: '',
            ciudad: 'Cadiz',
            provincia: 'Cadiz',
            cp: '28000'
        }
    }

    saludar(otro = 'amigo') { 
        console.log(`Hola ${otro}, soy ${this.nombre}`)
    }
}

let persona1 = new Persona('Pepe', 34)
let persona2 = new Persona('Rosa', 23)
let persona3 = new Persona('Ernesto')
persona1.altura = 180
delete persona2.direccion

persona1.saludar(persona2.nombre)
persona2.saludar(persona1.nombre)

console.log(persona1)
console.log(persona2)
console.log(persona3)


class Alumno extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad)
        this.curso = curso
    }
    saludar(p) {
        super.saludar(p)
        console.log(`Estudio ${this.curso}`)
    }
}

al1 = new Alumno('Raquel', 29, 'JavaScript')
al1.saludar(persona1.nombre)
console.log(al1)