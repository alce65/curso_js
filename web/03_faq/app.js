export function app() {
    console.log('app cargada')

    let preguntas = document.querySelectorAll('h2')
    let respuestas = document.querySelectorAll('div')
    preguntas = [...preguntas]
    respuestas = [...respuestas]
    

    preguntas.forEach(item => {
        item.addEventListener('click', onClick)
    });

    function onClick(ev) {
        respuestas.forEach(item => item.setAttribute('hidden', true))
        let nodo = ev.target
        console.log('Pregunta...' + nodo.id)
        console.dir(nodo)
        nodo.nextElementSibling.removeAttribute('hidden')
    }

}