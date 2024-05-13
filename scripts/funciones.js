
// Selecciona el elemento <span> por su ID
var menuButton = document.getElementById('menuButton');

// Agrega un event listener para escuchar el evento de clic en el botón
menuButton.addEventListener('click', function() {
    // Selecciona el elemento <ul> por su etiqueta
    var ulElement = document.getElementById('sub-menu');

    // Verifica si el <ul> tiene la clase "show"
    if (ulElement.classList.contains('show')) {
        // Si ya tiene la clase "show", la quitamos
        ulElement.classList.remove('show');
    } else {
        // Si no tiene la clase "show", la agregamos
        ulElement.classList.add('show');
    }
});

function ajustarClase() {

    var elemento = document.getElementById('menuButton');

    // Verifica las dimensiones de la pantalla
    if (window.innerWidth > 800 && window.innerHeight > 735) {
  
        elemento.classList.add('menu-ico-ocultar');

    } else if (window.innerWidth < 800 && window.innerHeight < 735){

        elemento.classList.remove('menu-ico-ocultar');
    }
}

window.onload = ajustarClase;

window.onresize = ajustarClase;
