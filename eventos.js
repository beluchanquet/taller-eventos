document.addEventListener('DOMContentLoaded', function() {
    const botón = document.querySelector('button');
    const divBotón = document.getElementById('botón');

    divBotón.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });

    botón.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});