let nombreUsuario = document.querySelector('#nombre')
let msjUsuario = document.querySelector('#mensaje')
let boton = document.querySelector('.boton')

boton.addEventListener('click', () => {
    if (nombreUsuario.value === "" || msjUsuario.value === "") {
        alert('Please fill all the inputs.')
    }
    else{
        alert('Message sent 🔥')
    }
})
