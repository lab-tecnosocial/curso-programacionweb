# JS

Aprender JavaScript para programación web tiene tipicamente dos partes:

- Aprender los fundamentos del lenguaje de programación por sí mismos
  - Variables y tipos de datos
  - Colecciones
  - Funciones
  - Estructuras de control
  - Clases y objetos
- Aprender cómo JavaScript puede interactuar con HTML y CSS en un proyecto web:
  - Manipulación del DOM
  - Manipulación de estilos
  - Interacción y eventos

## Fundamentos de programación en JS

### Variables, tipos de datos, operadores y evaluación

Una variable es como un contenedor etiquetado que contiene un determinado valor que puede variar. Por ejemplo:
```js
let persona = "Juan Perez";
let pi = 3.1416
```
Notar que:
- Para declarar una variable la primera vez es necesario usar la palabra clave `let`
- Luego hay que poner la etiqueta, nombre o identificador de la variable, en este caso `persona`. Hay unas reglas para especificar los nombres de las variables:
  - Deben contener solo caracteres en inglés, no ñ, ni tildes
  - Deben ser una sola palabra, y si tienen más de una palabra se debe usar el "camel case", es decir en vez de `nombre completo`: `nombreCompleto`.
  - Los nombres de las variables deben describir el contenido. Evitar nombres de variables como `a`, `b`, etc.
- Luego antes de darle el valor específico es necesario usar el operador de asignación que en JavaScrip es `=`. Este operador es diferente al operador de igualdad `===`. Simplemente quiere decir que se asigne el valor de la derecha al nombre de la iquierda
- Finalmente el valor en sí. En este caso es un texto o _string_: `"Juan Perez"`. En el valor de tipo texto se puede usar cualquier caracter UTF8, se puede escribir ortográficamente en esapañol usando tanto tildes y eñes, hasta emojis 🙂.

Los valores que puedes "guardar" en las variables tienen __tipos__, que dictan qué tipo de valor son y qué operaciones pueden realizarse con ellas. Los tipos más comunes son:

- `string` (cadena de caracteres): Texto. Se debe escribir envuelto en comillas dobles `" "` o simples `' '`.
- `number` (número): Tanto entero (`1`, `2`, `3`), como decimal (`4.5`, `10.456`). Se escriben tal cual.
- `boolean` (booleano): Un tipo de dato que puede aceptar solamente dos valores: `true` y `false`. Muy útil para expresiones lógicas, condicionales y bucles.
- `undefined` (no definido): Significa que no tiene un valor asignado por defecto.
- `null` (nulo): Significa que no tiene valor y lo asignamos explicitamente.

Podemos usar el operador `typeof` para chequear de qué tipo es una variable o valor. 


Las variables tienen un ciclo de vida. Nacen, las usamos, las actualizamos y son eliminadas. Se podría usar el acrónimo CRUD que viene de las base de datos para entender un poco mejor este comportamiento de las variables:

- C (create): las variables se declaran o definen la primera vez que se nombran. Por ejemplo, `let miNumeroFavorito = 13;`
- R (read): para usar la variable ya no es necesario usar la palabra clave `let`, suficiente es usar su nombre, por ejemplo `miNumeroFavorito + 3` da como resultado 16.
- U (update): si queremos cambiar el valor de la variable podemos reasignarle un valor, otra vez solo llamandolo y usando el operador de asignación: `miNumeroFavorito = 33`
- D (delete): JavaScript se encarga de borrar de la memoria automáticamente las variables que ya no se necesitan.


Las variables son muy útiles en programación porque pueden guardar datos y sus transformaciones. Se podría definir aun programa como un conjunto de instrucciones que operan sobre datos:

 $$\text{programa = instrucciones(datos)}$$

Vimos que las las variables guardan datos, pero ¿y las instrucciones? Las instrucciones pueden venir en forma:

- Operadores: que son simbolos que ejecutan alguna operación sobre operandos, que suelen ser variables
  - Operadores aritméticos: como: `+`, `-`, `/`, `*`, `**`, que pueden hacer funcionar a JavaScript como una calculadora
  - Operadores de comparación: como `>`, `<`, `===`, `!===`
  - Operadores lógicos: como `&&`, `||`, `!`
- Funciones: que son procedimientos que se aplican a unas entradas y producen unas salidas. Por ejemplo:
  - `console.log()` para imprimir resultados en consola
  - `Math.random()` para generar números aleatorios
- Composiciones de funciones: que aplican varias funciones a determinados datos

Por ejemplo, podemos hacer sumas sobre variables númericas y mostrar el resultado en consola:

```js
let ganancias = 400;
let bonos = 40;

console.log(ganancias + bonos) // se evalua a 440


```
Lo anterior funciona porque las variables se evaluan a sus valores originales, luego se suman y se ejecutan las funciones. Lo cual sucede con cualquier expresión. Una expresión es una combinación compleja entre variables, operadores y funciones que se evaluan en un resultado.

Otro ejemplo con tipos de datos diferentes:

```js
let nombre = 'Juan';
let apellido = 'Perez';

console.log(nombre + ' ' + apellido) // se evalua a Juan Perez
```

Los operadores esperan unos tipos de datos determinados. Y en algunos casos como el operador `+` dan diferentes resultados: si las variables son númericas realizan una suma aritmética, si son texto efectuan una _concatenación_.


### Colecciones

Estructuras de datos

#### Arreglos (arrays)

#### Objetos

#### JSON

### Funciones

### Estructuras de control

#### Condicionales

#### Bucles (loops)

## Programación web con JS

### El DOM

### Estilos con JS

### Eventos

## Una mini app web completa