
// Objetos literales o JSON

const persona = {
    nombre: 'Pepe',
    edad: 23,
    direccion : {
        calle: 'Pez',
        sitio : {
            ciudad: 'Cadiz',
            provincia: 'Cadiz',
            cp: '28012'
        }
    },
    saludar : function (otro = 'amigo') { 
        console.log(`Hola ${otro}, soy ${this.nombre}`)
    }
}

console.log(persona)
console.log(persona.direccion.sitio.cp)

let clave = 'nombre'

console.log(persona[clave])

persona.saludar('Rosa')

const persona2 = {...persona} 

persona.nombre = 'Ramon'
console.log(persona2.nombre)
persona2.saludar(persona.nombre)
persona.saludar(persona2.nombre)
