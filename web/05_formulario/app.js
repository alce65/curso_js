import { Alumno } from './alumno.js'
export function app() {
    console.log('app cargada')

    const form = document.querySelector('#form_curso')
    const dlg = document.querySelector('#confirmar')
    const datosOutput = document.querySelector('#datosOutput')
    const btnConfirmar = document.querySelector('#btnConfirmar')
    const btnNoConfirmar = document.querySelector('#btnNoConfirmar')
    const inputs = [
        ...document.querySelectorAll('.control-group input'), 
        ...document.querySelectorAll('.control-group textarea'), 
        ...document.querySelectorAll('.control-group select')]
    const checks = [...document.querySelectorAll('.check-group input')]
    const turnoRadios = [...document.querySelectorAll('[name="turno"]')]
    const sedeRadios = [...document.querySelectorAll('[name="sede"]')]

    const alumno = new Alumno()
    form.addEventListener('submit', onSubmit)
    
    btnConfirmar.addEventListener('click', onConfirmar)
    btnNoConfirmar.addEventListener('click', onConfirmar)

    

    function onSubmit(ev) {
        ev.preventDefault()
        console.log('Envio diferido')
        // dlg.setAttribute('open',true)

        alumno.nombre = inputs[0].value
        alumno.apellido = inputs[1].value
        alumno.dni =  inputs[2].value
        alumno.email =  inputs[3].value
        alumno.passwd =  inputs[4].value
        alumno.nacim =  inputs[5].value
        alumno.coments =  inputs[6].value
        alumno.aceptado = checks[0].checked
        alumno.misdatos = checks[1].checked
        alumno.curso =  inputs[7].value
        alumno.turno = getRadio(turnoRadios)
        alumno.sede = getRadio(sedeRadios)
        console.log(alumno)

        datosOutput.innerHTML = ''
        let cadena = JSON.stringify(alumno)
        cadena.split(',').forEach( item => {
            datosOutput.innerHTML += item + '<br>'
        })
        
        dlg.showModal()
    }


    function onConfirmar(ev) { 

        if (ev.target.id == 'btnConfirmar') {    
            form.submit()
            // TODO: enviar por AJAX
        }
        dlg.close()
        
    }


    function getRadio(data) {
        let r = ''
        data.some( item => {
            if(item.checked) { 
                r = item.value
            }
        });
        return  r
    }
}