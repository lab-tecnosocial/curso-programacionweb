let integrantesLab = ['Abigail', 'Patricia', 'Nicaela', 'Valeria', 'Javier', 'Erick'];

// primera opcion codigo suelto
console.log('Hola' + ' ' + integrantesLab[0]);
console.log('Hola' + ' ' + integrantesLab[1]);
console.log('Hola' + ' ' + integrantesLab[2]);
console.log('Hola' + ' ' + integrantesLab[3]);
console.log('Hola' + ' ' + integrantesLab[4]);

// segunda opción con función
function saludar(nombre) {
    console.log('Hola' + ' ' + nombre + '😀');
}

saludar(integrantesLab[0]);
saludar(integrantesLab[1]);
saludar(integrantesLab[2]);
saludar(integrantesLab[3]);
saludar(integrantesLab[4]);

// ciclo con un for loop
// un contandor o un indexador que crece (0, 1, 2)
for (let indice = 0; indice < integrantesLab.length; indice++) {
    saludar(integrantesLab[indice]);
}

// ciclo for of (agarra cada elemento de una coleccion)
for (const integrante of integrantesLab) {
    saludar(integrante);
    console.log('*******************');
}

// while
let numeroPapas = 1;
while (numeroPapas < 5) {
    console.log('comer papa' + ' ' + numeroPapas);
    numeroPapas++;
}

