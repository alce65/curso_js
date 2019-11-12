

// Objetos literales 

/* const persona = {
    nombre: 'Pepe',
    edad: 23,
    direccion : {
        calle: 'Pez',
        ciudad: 'Cadiz',
        provincia: 'Cadiz',
        cp: '28012'
    },
    saludar : function (otro = 'amigo') { 
            console.log(`Hola ${otro}, soy ${this.nombre}`)
        }
}   
 */

// Funciones constructoras de Objetos
// Por convenio empiezan por MAYUSCULA

function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    this.direccion = {
        calle: '',
        ciudad: 'Cadiz',
        provincia: 'Cadiz',
        cp: '28000'
    }
}

Persona.prototype.cerebro = true
Persona.prototype.saludar = function (otro = 'amigo') { 
        console.log(`Hola ${otro}, soy ${this.nombre}`)
    }

let persona1 = new Persona('Pepe', 34)
let persona2 = new Persona('Rosa', 23)
persona1.altura = 180
delete persona2.direccion

persona1.saludar(persona2.nombre)
persona2.saludar(persona1.nombre)

console.log(persona1)
console.log(persona2)

console.log(persona1.cerebro)
console.log(persona2.cerebro)