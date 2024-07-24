// seleccionar elementos (event targets)
// ¿con qué voy a trabajar? QUIENES
// body, boton-rojo, boton-azul, boton-verde 
// <- meterlos en variables

let cuerpo = document.querySelector('body');
let botonRojo = document.querySelector('#boton-rojo');
let botonAzul = document.querySelector('#boton-azul');
let botonVerde = document.querySelector('#boton-verde');

let fiesta = document.querySelector('#boton-fiesta');
let velorio = document.querySelector('#boton-velorio');
let h1 = document.querySelector('h1');


// añadir eventos (añadir event listeners)
botonRojo.addEventListener('click', pintarRojo);
fiesta.addEventListener('click', pintarFiesta);
velorio.addEventListener('click', pintarVelorio);

// añadir funciones (acciones)
function pintarRojo() {
    // primera forma cuando el estilo es sencillo
    cuerpo.style.backgroundColor = 'red';
}

function pintarFiesta() {
    // segunda forma cuando hay harto css
    cuerpo.classList.toggle('fiesta');
}

function pintarVelorio() {
    cuerpo.classList.toggle('velorio');
}