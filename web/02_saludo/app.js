import { AUTOR } from './utils.js'

function main() {
    const btnBorrar = document.querySelector('#btn-borrar')
    const btnPrueba = document.querySelector('#btn-prueba')
    const inNombre = document.querySelector('#in-nombre')
    const output = document.querySelector('#output')
    const imgPrueba = document.querySelector('#img-prueba')

    const imagenes = [
        './assets/komodo.jpg',
        './assets/iguana.jpg'
    ]

    const borrar = () => {
        inNombre.value = ''
        output.innerHTML = ''
    }

    const getNombre= () => {
        output.innerHTML = inNombre.value
    }

    const prueba = () => {
        if (imgPrueba.getAttribute('src') == imagenes[0]) {
             imgPrueba.setAttribute('src', imagenes[1])
        } else {
            imgPrueba.setAttribute('src', imagenes[0])
        }
    }

    btnBorrar.addEventListener('click', borrar)
    btnPrueba.addEventListener('click', prueba)
    inNombre.addEventListener('input', getNombre)
}


 document.addEventListener('DOMContentLoaded', main)
