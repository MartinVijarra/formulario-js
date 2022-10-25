let nombreUsuario = document.querySelector('#nombre')
let msjUsuario = document.querySelector('#mensaje')
let boton = document.querySelector('.boton')

boton.addEventListener('click', () => {
    if (nombreUsuario.value === "" || msjUsuario.value === "") {
        alert('Rellene los campos con la información.')
    }
    else{
        alert('Datos enviados.')
    }
})
