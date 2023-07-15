let dataVeterinaria = [
    {
        nombre: 'Alex Ojeda',
        edad: 36,
        mascotas: [
            {
                especie: 'Gato',
                nombre: 'Misifuz'
            }
        ]
    },
    {
        nombre: 'Nicaela Leon',
        edad: 25,
        mascotas: [
            {
                especie: 'Gato',
                nombre: 'Angel'
            }
        ]
    },
    {
        nombre: 'Patricia Delgadillo',
        edad: 20,
        mascotas: [
            {
                especie: 'Perro',
                nombre: 'Bobby'
            }
        ]
    }
];



// LEER OBJETO (read) //

// imprimir objeto entero
console.log(dataVeterinaria)

// recorrer arreglo
let arregloSimple = ['a', 'b', 'c'];
console.log(arregloSimple[2]);

// recorrer objeto
let objetoSimple = {
    titulo: 'objeto',
    tipo: 'simple'
};
console.log(objetoSimple.titulo);

// leer propiedad especifica de objeto
console.log(dataVeterinaria[0].mascotas[0].nombre);

// ACTUALIZAR OBJETO (update) //

let nombrePersona = 'Pedro';
nombrePersona = 'Pedro Sanchez';
console.log(nombrePersona);

// actualizar edad de Alex
dataVeterinaria[0].edad = 37;
console.log(dataVeterinaria[0]);

// JSON //

// imprimir JSON
let dataJSON = JSON.stringify(dataVeterinaria); // de objeto a string
console.log(dataJSON)

// parsear JSON (de string a objeto)
let stringJSON = '[{"nombre":"Alex Ojeda","edad":36,"mascotas":[{"especie":"Gato","nombre":"Misifuz"}]},{"nombre":"Nicaela Leon","edad":25,"mascotas":[{"especie":"Gato","nombre":"Angel"}]},{"nombre":"Patricia Delgadillo","edad":20,"mascotas":[{"especie":"Perro","nombre":"Bobby"}]}]';
let parsedJSON = JSON.parse(stringJSON);
console.log(parsedJSON);