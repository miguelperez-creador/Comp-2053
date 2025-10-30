const titulo = document.getElementById('titulo');
const contenedor = document.getElementById('contenedor');
const parrafo2 = document.getElementById('parrafo2');
const botonColor = document.getElementById('cambiarColor');
const botonOcultar = document.getElementById('ocultarParrafo');
const botonMostrar = document.getElementById('mostrarParrafo');

// Guardamos colores originales usando getComputedStyle
const estilosTitulo = getComputedStyle(titulo);
const colorOriginalTitulo = estilosTitulo.color;

const encabezado = document.getElementById('encabezado');
const estilosEncabezado = getComputedStyle(encabezado);
const fondoOriginalEncabezado = estilosEncabezado.backgroundImage || estilosEncabezado.background;

// Variable para alternar
let colorCambiado = false;

// Cambiar color del título y fondo con toggle
botonColor.addEventListener('click', () => {
    if (!colorCambiado) {
        titulo.style.color = 'white';
        encabezado.style.background = 'linear-gradient(90deg, #40E0D0, #0ea5e9)';
    } else {
        titulo.style.color = colorOriginalTitulo;
        encabezado.style.background = fondoOriginalEncabezado;
    }
    colorCambiado = !colorCambiado;

    // Crear o mostrar el enlace (igual que antes)
    let enlace = document.getElementById('nuevo-enlace');
    if (!enlace) {
        enlace = document.createElement('a');
        enlace.href = 'https://www.elmundo.es/tecnologia.html';
        enlace.textContent = 'Para más información visita el siguiente enlace';
        enlace.id = 'nuevo-enlace';
        enlace.target = '_blank';
        contenedor.appendChild(enlace);
    } else {
        enlace.style.display = 'block';
    }
});
