const contenedor = document.querySelector('.contenedor');
const inciarsesion = document.getElementById('iniciar-sesion');
const registrarse = document.getElementById('registrarse');

inciarsesion.addEventListener('click', function() {
    contenedor.classList.remove('toggle');
});

registrarse.addEventListener('click', function() {
    contenedor.classList.add('toggle');
});