// selectores
let contenedor = document.querySelector('#contenedor');
let boton = document.querySelector('#boton');

// funciones
let randomColor = function () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ',' + green + ',' + blue + ')'
}

let generarCajas = function () {
    contenedor.innerHTML = '';
    for (let i = 0; i < 30; i++) {
        let caja = document.createElement('div');
        caja.classList.add('box');
        caja.style.backgroundColor = randomColor();
        contenedor.appendChild(caja);
    }
}

// escucha de eventos
boton.addEventListener('click', generarCajas);





