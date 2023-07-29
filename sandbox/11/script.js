// objeto con métodos
let persona = {
    nombre: 'Alex Ojeda',
    edad: 34,
    hobbies: ['leer', 'escribir', 'programar', 'correr'],
    saludar() {
        console.log('Hola')
    }
}

persona.saludar();

// acceder al elemento y referenciarlo en una variable
let cuerpo = document.body;
let titulo = document.querySelector('#titulo');

// cambiar su contenido
titulo.textContent = 'Hola';

// cambiar su estilo
titulo.style.color = 'blue';
cuerpo.style.backgroundColor = 'pink';


// crea elementos HTML
// (1) crear el elemento (en el aire)
let parrafo = document.createElement('p');
parrafo.textContent = "Adios a todosadsfasdfasfasdfasdf";
// (2) agregarle al arbol HTML o dom
cuerpo.appendChild(parrafo);

// borrar elementos HTML
cuerpo.removeChild(document.querySelector('#ultimo'));