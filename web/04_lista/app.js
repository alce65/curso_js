export function app() {
    console.log('app cargada')
    
    const animales = []
    // Nodo del DOM 

    const inAnimal = document.querySelector('#in-animal')
    const output = document.querySelector('#output')
    
    // Definir manejadores de eventos

    /* inAnimal.addEventListener('focus', onAnimal)
    inAnimal.addEventListener('blur', onAnimal)
    inAnimal.addEventListener('input', onAnimal) */
    inAnimal.addEventListener('change', onAnimal)
    
    function onAnimal(ev) {
        if (ev.target.value) {
            animales.push(ev.target.value)
            ev.target.value = ''
            render(animales)
        }
    }

    function render (data) {
        let html = ''
        data.forEach( (item, id) => {
            // html = html + `<li>${item}</li>`
            html += `<li>
                ${item} 
                <span class='boton' title="Borrar" data-id="${id}">
                    🗑
                </span>
            </li>`
        });
        console.log(html)
        output.innerHTML = html

        const botones = document.querySelectorAll('.boton')
        console.dir(botones)

        botones.forEach( item => 
            item.addEventListener('click', borrar)
            )

    }

    function borrar(ev) {
        console.log(ev.target.dataset.id)
        animales.splice(ev.target.dataset.id, 1)
        render(animales)
    }
}