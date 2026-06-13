const contenedor = document.querySelector('.contenedor');
const inciarsesion = document.getElementById('iniciar-sesion');
const registrarse = document.getElementById('registrarse');

inciarsesion.addEventListener('click', function() {
    contenedor.classList.remove('toggle');
});

registrarse.addEventListener('click', function() {
    contenedor.classList.add('toggle');
});

// Validación de formulario

const iniciar = document.getElementById('iniciar');

iniciar.addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        alert('Inicio de sesión exitoso');
    } 
});

const regis = document.getElementById('regis');

regis.addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const emailRegistro = document.getElementById('email-registro').value;
    const passwordRegistro = document.getElementById('password-registro').value;

    if (nombre === '' || emailRegistro === '' || passwordRegistro === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        alert('Registro exitoso');
    }
});

//formulario

const enviar = document.getElementById('enviar');

enviar.addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const cedula = document.getElementById('cedula').value;
    const celular = document.getElementById('celular').value;
    const email = document.getElementById('email').value;

    if (nombre === '' || apellido === '' || cedula === '' || celular === '' || email === '' ) {
             alert('Por favor, complete todos los campos.');
    } else {
        alert('Registro exitoso');
    }
});
