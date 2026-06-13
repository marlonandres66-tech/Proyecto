const enviar = document.getElementById('enviarPs');

enviar.addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const cedula = document.getElementById('cedula').value;
    const celular = document.getElementById('celular').value;
    const email = document.getElementById('email').value;

    if  (nombre === '' || apellido === '' || cedula === '' || celular === '' || email === ''){
             alert('Por favor, complete todos los campos.');
    } else {
        alert('Registro exitoso');
    }
});