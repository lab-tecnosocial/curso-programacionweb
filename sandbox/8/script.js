/*
    PROBLEMA: REPETICION Y FALTA DE ABSTRACCION
*/

// saludo 1
console.log('Hola');
console.log('Un gusto conocerte');
console.log('Saludos');

// saludo 2
console.log('Hola');
console.log('Un gusto conocerte');
console.log('Saludos');

// saludo 3
console.log('Hola');
console.log('Un gusto conocerte');
console.log('Saludos');

/*
    FUNCIONES SIMPLES
*/

// declaración

function saludar() {
    console.log('Hola');
    console.log('Un gusto conocerte');
    console.log('Saludos');
}

// invocacion 1
saludar()

//invocacion 2
saludar()

// invocacion 3
saludar()

/* 
    FUNCIONES COMPLETAS
*/

// declaracion con un parametro
function saludar2(tuNombre) {
    console.log('Hola ' + tuNombre);
    console.log('Un gusto conocerte' + ', ' + tuNombre);
    console.log('Saludos');
}

// invocacion con un parametro
saludar2('Valeria');
saludar2('Abigail');
saludar2('Patricia');

// declaracion con dos parametros y un retorno
function areaTriangulo(base, altura) {
    let resultadoNumerico = base * altura / 2;
    let respuestaAmable = 'El área de tu triangulo es: ' + resultadoNumerico;
    return respuestaAmable;
}

// declaración de variable objeto solo por fines de organizacion
let miTriangulo = {
    base: 20,
    altura: 10
};

// invocación de la función y luego asignación del resultado de la función a una variable
let miArea = areaTriangulo(miTriangulo.base, miTriangulo.altura);

// imprimir en consola la variable resultante
console.log(miArea);

