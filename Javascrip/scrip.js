const titulo = document.getElementById('titulo');
const contenedor = document.getElementById('contenedor');
const parrafo2 = document.getElementById('parrafo2');
const botonColor = document.getElementById('cambiarColor');
const botonOcultar = document.getElementById('ocultarParrafo');
const botonMostrar = document.getElementById('mostrarParrafo');

// Cambiar color del título y añadir un enlace al hacer clic
botonColor.addEventListener('click', () => {
    // Cambiar color del título
    titulo.style.color = 'white';

    // Cambiar el fondo del encabezado
    document.getElementById('encabezado').style.background = 'linear-gradient(90deg, #40E0D0, #0ea5e9)';

    // Crear el enlace si no existe
    let enlace = document.getElementById('nuevo-enlace');
    if (!enlace) {
        enlace = document.createElement('a');
        enlace.href = 'https://www.elmundo.es/tecnologia.html';
        enlace.textContent = 'Para más información visita el siguiente enlace';
        enlace.id = 'nuevo-enlace';
        enlace.target = '_blank'; // abrirá en nueva pestaña
        contenedor.appendChild(enlace);
    } else {
        // Si ya existe pero estaba oculto, mostrarlo
        enlace.style.display = 'block';
    }
});

// Ocultar el segundo párrafo
botonOcultar.addEventListener('click', () => { 
    parrafo2.style.display = 'none'; 
});

// Mostrar el segundo párrafo
botonMostrar.addEventListener('click', () => { 
    parrafo2.style.display = 'block'; 
});
