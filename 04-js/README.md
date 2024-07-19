# JS

- [JS](#js)
  - [Fundamentos de programación en JS](#fundamentos-de-programación-en-js)
    - [Variables y tipos de datos](#variables-y-tipos-de-datos)
    - [Operadores y evaluación](#operadores-y-evaluación)
    - [Colecciones](#colecciones)
      - [Arreglos (arrays)](#arreglos-arrays)
      - [Objetos](#objetos)
      - [JSON](#json)
    - [Funciones](#funciones)
    - [Estructuras de control](#estructuras-de-control)
      - [Condicionales](#condicionales)
      - [Bucles (loops)](#bucles-loops)
  - [Programación web con JS](#programación-web-con-js)
    - [El DOM](#el-dom)
    - [Estilos con JS](#estilos-con-js)
    - [Eventos](#eventos)
  - [Una mini app web completa](#una-mini-app-web-completa)

Aprender JavaScript para programación web tiene típicamente dos partes:

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

### Variables y tipos de datos

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
- Luego antes de darle el valor específico es necesario usar el operador de asignación que en JavaScrip es `=`. Este operador es diferente al operador de igualdad `===`. Simplemente quiere decir que se asigne el valor de la derecha al nombre de la izquierda
- Finalmente el valor en sí. En este caso es un texto o _string_: `"Juan Perez"`. En el valor de tipo texto se puede usar cualquier carácter UTF8, se puede escribir ortográficamente en español usando tanto tildes y eñes, hasta emojis 🙂.

Los valores que puedes "guardar" en las variables tienen __tipos__, que dictan qué tipo de valor son y qué operaciones pueden realizarse con ellas. Los tipos más comunes son:

- `string` (cadena de caracteres): Texto. Se debe escribir envuelto en comillas dobles `" "` o simples `' '`.
- `number` (número): Tanto entero (`1`, `2`, `3`), como decimal (`4.5`, `10.456`). Se escriben tal cual.
- `boolean` (booleano): Un tipo de dato que puede aceptar solamente dos valores: `true` y `false`. Muy útil para expresiones lógicas, condicionales y bucles.
- `undefined` (no definido): Significa que no tiene un valor asignado por defecto.
- `null` (nulo): Significa que no tiene valor y lo asignamos explícitamente.

Podemos usar el operador `typeof` para chequear de qué tipo es una variable o valor. 

Las variables tienen un **ciclo de vida**. Nacen, las usamos, las actualizamos y son eliminadas. De forma didáctica podría usar el acrónimo CRUD que viene de las bases de datos para entender un poco mejor este comportamiento de las variables:

- **C**reate (crear): las variables se declaran o definen la primera vez que se nombran. Por ejemplo, `let miNumeroFavorito = 13;`
- **R**ead (leer): para usar la variable ya no es necesario usar la palabra clave `let`, suficiente es usar su nombre, por ejemplo `miNumeroFavorito + 3` da como resultado 16.
- **U**pdate (actualizar): si queremos cambiar el valor de la variable podemos reasignarle un valor, otra vez solo llamándolo y usando el operador de asignación: `miNumeroFavorito = 33`
- **D**elete (borrar): JavaScript se encarga de borrar de la memoria automáticamente las variables que ya no se necesitan.

Las variables son muy útiles en programación porque pueden guardar datos y sus transformaciones. Se podría definir a un programa como un conjunto de instrucciones que operan sobre datos:

 $$\text{programa = instrucciones(datos)}$$

### Operadores y evaluación

Vimos que las las variables guardan datos, pero ¿y las instrucciones? Las instrucciones pueden venir en forma:

- Operadores: que son símbolos que ejecutan alguna operación sobre operandos, que suelen ser variables
  - Operadores aritméticos: como: `+`, `-`, `/`, `*`, `**`, que pueden hacer funcionar a JavaScript como una calculadora
  - Operadores de comparación: como `>`, `<`, `===`, `!===`
  - Operadores lógicos: como `&&`, `||`, `!`
- Funciones: que son procedimientos que se aplican a unas entradas y producen unas salidas. Por ejemplo:
  - `console.log()` para imprimir resultados en consola
  - `Math.random()` para generar números aleatorios
- Composiciones de funciones: que aplican varias funciones a determinados datos

Por ejemplo, podemos hacer sumas sobre variables numéricas y mostrar el resultado en consola:

```js
let ganancias = 400;
let bonos = 40;

console.log(ganancias + bonos) // se evalúa a 440


```
Lo anterior funciona porque las variables se evalúan a sus valores originales, luego se suman y se ejecutan las funciones. Lo cual sucede con cualquier expresión. Una expresión es una combinación compleja entre variables, operadores y funciones que se evalúan en un resultado.

Otro ejemplo con tipos de datos diferentes:

```js
let nombre = 'Juan';
let apellido = 'Perez';

console.log(nombre + ' ' + apellido) // se evalúa a Juan Perez
```

Los operadores esperan unos tipos de datos determinados. Y en algunos casos como el operador `+` dan diferentes resultados:
- si las variables son numéricas realizan una suma aritmética
- si son texto efectúan una _concatenación_


### Colecciones

En la práctica lidiaremos con variables que contienen datos individuales, pero es más frecuente trabajar con conjuntos enteros de datos: colecciones. Piensa en una lista de estudiantes, notas o precios, o unas tablas de datos, los cuales son más fáciles de trabajar con colecciones. Los dos tipos de colecciones más usados en JavaScript son:
- Array (arreglo): una colección indexada de elementos: `[ ]`
- Object (objeto): una colección nombrada de elementos: `{ }`

#### Arreglos (arrays)
Los arreglos son una colección indexada de datos, por ejemplo:

```js
// Crear
let notas = [50, 70, 90];
let coloresFavoritos = ["Azul", "Violeta", "Celeste"];

// Leer o acceder
let primeraNota = notas[0];
let segundaNota = notas[1];
let terceraNota = notas[2];
let primerColor = coloresFavoritos[0];
let segundoColor = coloresFavoritos[1];
let tercerColor = coloresFavoritos[2];

// Actualizar
segundaNota[1] = 75;
tercerColor[2] = "Plomo";
```
Observa que:
- Los arreglos se definen usando corchetes: `[ ]`
- Dentro de los corchetes van los elementos separados por una coma `,`
- Para acceder a estos objetos se usan índices, es decir los números de las posiciones. Se comienza desde 0, es decir el primer elemento no es 1 sino 0. El primer valor de notas que es `50` se debe acceder con `notas[0]` y no `notas[1]`.
- Para actualizar los datos se usan también los índices

#### Objetos
Los objetos son colecciones nombradas de datos por ejemplo:

```js
// Crear
let notas = {p1: 50, p2: 70, p3: 90};
let coloresFavoritos = {colorPrimario: "Azul", colorSecundario: "Violeta", colorOpcional: "Celeste"};
// O alternativamente para mayor legibilidad con nuevas lineas
let notas = {
    p1: 50, 
    p2: 70, 
    p3: 90
  };
let coloresFavoritos = {
  colorPrimario: "Azul", 
  colorSecundario: "Violeta", 
  colorOpcional: "Celeste"
};

// Actualizar
notas.p2 = 75;
coloresFavoritos.colorOpcional = "Plomo"
// o alternativamente 
notas.["p2"] = 75;
coloresFavoritos["colorOpcional"] = "Plomo"
```
Observar que:
- Los objetos se definen usando llaves: `{ }`
- Los elementos requieren un par de `nombre: valor`, separados por comas
- Para acceder a los objetos se usan los nombres que especificamos, no índices: `notas.p1`
- Los nombres si son una sola palabra y no tienen caracteres especiales se pueden usar con el operador punto `.`
- Si los nombres tienen más de una palabra o tienen un carácter especial se los puede pasar al corchete entre comillas `variable["nombre"]`
- Recomendamos usar nombres en lo posible de una sola palabra y sin caracteres especiales para mayor facilidad de uso
- Se actualizan igual usando los nombres
- Es posible incluir funciones o métodos en los objetos (ver más abajo)

#### JSON
Los arreglos y los objetos de JavaScript también se suelen usar en un formato especial llamado JSON (JavaScript Object Notation) que sirve para almacenar e intercambiar datos en formato de texto simple. Suele ser muy usado cuando interactúas con un backend, base de datos o API (Applications Programming Interface), quienes sin importar en qué lenguaje estén pueden darte una versión en JSON de sus datos con las que puedes trabajar en tu aplicación web.

Un formato JSON es una aplicación y combinación de los objetos, arreglos y tipos de datos de JavaScript:
```json
{
  "notas": [50, 70, 90],
  "coloresFavoritos": {
    "colorPrimario": "Azul", 
    "colorSecundario": "Violeta", 
    "colorOpcional": "Celeste"
  }
}
```
Con las siguientes diferencias:
- JSON se escribe en texto.
- Normalmente JSON vendrá de una base de datos o un archivo que termina en `.json`.
- Los nombres o claves de las propiedades deben siempre estar con comillas dobles `" "`
- No pueden tener funciones

Puedes transformar un archivo JSON a un objeto JavaScript de la siguiente forma:
- De objeto a JSON con `JSON.stringify()`
- De JSON a objeto con `JSON.parse()`

### Funciones
Las funciones son procedimientos que podemos "empaquetar" y reutilizar en diferentes situaciones. Para ello debemos primero declararlo y luego invocarlo. Veremos un caso simple y luego el caso completo.

En el caso simple, pongamos el caso que solemos aumentar 1 punto extra por participación a las notas de un estudiante, en diferentes ocasiones:

```js
let notasEstudiante = [50, 70, 90];
notas[0] += 1;
notas[0] += 1;
notas[0] += 1;
```
Fíjate que debemos repetir cada vez la mima linea de código, y esto se complicaría más si fueran varias lineas. Esto no es eficiente. Para eso vamos a "empaquetar" ese código en una función:

```js
let notas = [50, 70, 90];
// declaración de función
function aumentarPunto() {
  notas[0] += 1;
}
// invocación de función
aumentarPunto();
aumentarPunto();
aumentarPunto();
```
Observar que:
- Para declarar una función debemos usar la palabra clave `function`, luego poner un nombre a la función seguido de paréntesis `()`. 
- Luego abrir un bloque con llaves `{ }`, donde podemos poner el código que queramos que se ejecute cada vez que invoquemos la función.
- Para invocar la función usamos su nombre seguido de paréntesis
- La invocación de la función se diferencia de un nombre de variable por los paréntesis que lo acompañan.
  
Sin embargo, este caso simple no es muy flexible, solo agrega un punto al primer parcial. ¿Qué pasa si queremos agregar diferentes cantidades de puntos a diferentes parciales? Para eso debemos ver el caso completo.

Podemos pensar una función también como un mini sistema, que recibe entradas, hace un proceso, y devuelve una salida:

```
entradas -> proceso -> salida
```
Para ello declaramos esta función más completa y flexible:
```js
function aumentarPuntos(parcial, puntos){
  notas[parcial - 1] += puntos;
  return notas[parcial];
}
```
Observar que:
- Las entradas aquí son parámetros o argumentos, que son una suerte de variables que nos ayudan a "pasar" información de la cabeza de la función al cuerpo de la función. 
  - Para declarar los parámetros  usamos el paréntesis `()` para pasar dos valores: `parcial` y `puntos`, ambos de tipo numérico.
  - Luego en el cuerpo usamos estos parámetros.
- En el proceso, que está en el cuerpo, lo primero que hacemos es actualizar el valor del parcial elegido, usando los dos parámetros.
- La salida es lo que devuelve la función, para ello usamos la palabra clave `return`. En este caso devolvemos solo el valor actualizado de forma informativa.

Para invocarlos y usarlos:
```js
aumentarPuntos(1, 15);
aumentarPUntos(3, 7);
```
La primera invocación accede al primer parcial y aumenta quince puntos. La segunda accede al tercer parcial y aumenta 7 puntos.

### Estructuras de control
También llamado como "control de flujo", sirven para modificar el flujo normal de un bloque de código. Lo normal es que se ejecuten secuencialmente, de arriba hacía abajo, pero es posible además lograr lo siguiente:

- Ramificar el flujo a partir de condiciones, mediante condicionales. También llamado selección o decisión.
- Repetir el flujo, mediante bucles. También llamado repetición o iteración

Estas estructuras de control visualmente se ven así:

![](img/control-structures.webp)

#### Condicionales
Las condicionales nos permiten tomar decisiones en función a circunstancias especificas, que se prueban a partir de comparaciones que devuelven valores booleanos (`true` o `false`).

Siguiendo con el ejemplo anterior de la asignación de notas, ¿qué pasa si el estudiante tiene ya 100 puntos qué es el máximo? Ese es un caso especial que hay que atender, la función debería saber que en ese caso no se puede aumentar más. Para ello usaremos una condicional de la siguiente forma:

```js
function aumentarPuntos(parcial, puntos){
  if(notas[parcial - 1] === 100) {
    console.log("El estudiante ya tiene 100");
    return;
  }
  notas[parcial - 1] += puntos;
  console.log("Puntos agregados");
  return notas[parcial];
}
```
Observar que:
- Para hacer condicionales debemos usar la palabra clave `if` (si)
- `if` comprobara si lo que le sigue y está en paréntesis es verdadero o falso. Para hacer este comprobación se necesita usar operadores de comparación:
  - `===`: igual que
  - `!==`: no igual ue
  - `>`: mayor que
  - `<`: menor que
  - `>=`: mayor o igual que
  - `<=`: menor o igual que
- Si es verdadero entonces ejecutará el bloque de código que están entre las llaves `{}`. Pero si es falso simplemente lo omitirá, como si no existiera y continuará con el flujo secuencia del código.
- Dentro del bloque del condicional, en caso de que sea verdadero, primero imprimirá un mensaje para el usuario y luego simplemente terminará su ejecución con `return`.

También podemos comprobar condiciones más complejas utilizando operadores lógicos:
- `&&`: conjunción o "y". Devuelve verdadero solo si todos los valores son verdaderos
- `||`: disyunción u "o". Devuelve falso solo si todos los valores son falsos.
- `!`: negación o "no". Invierte el valor, de verdadero a falso o de falso a verdadero.

Por ejemplo, si quisiéramos verificar que tiene 100 en los tres parciales:
```js
function aumentarPuntos(parcial, puntos){
  if(notas[0] === 100 && notas[1] === 100 && notas[2] === 100){
    console.log("¡Tiene 100 en todo!")
    return;
  }
  if(notas[parcial - 1] === 100) {
    console.log("El estudiante ya tiene 100");
    return;
  }
  notas[parcial - 1] += puntos;
  console.log("Puntos agregados");
  return notas[parcial];
}
```

También es posible agregar una clausula `else` (sino), que sirve para manejar de forma directa el caso falso o incluir más comprobaciones con `if`:

```js
function aumentarPuntos(parcial, puntos){
  if(notas[parcial - 1] === 100) {
    console.log("El estudiante ya tiene 100");
    return;
  } else if(notas[parcial - 1] > 90) {
    console.log("Ya casi llega al limite");
  }
  notas[parcial - 1] += puntos;
  console.log("Puntos agregados");
  return notas[parcial];
}
```
Se puede agregar varios `else if` para manejar varios casos. O también si hay muchos casos se puede usar un `switch`, que tiene una sintaxis diferente:

```js
switch (expresion) {
  case caso1:
    codigo
    break;
  case caso2:
    codigo
    break;
  // …
  case casoN:
    codigo
  break;
  default:
    codigo
}
```

#### Bucles (loops)
Los bucles nos permiten ejecutar un bloque una cantidad definida o indefinida de veces de acuerdo a una condición booleana. Veremos dos variantes: `for` y `while`.

Siguiendo con la misma función, ahora queremos hacer un reporte de las tres notas del estudiante. Entonces debemos recorrer la lista o array de notas:

```js
let notas = [50, 70, 90];
for(let i = 0; i < notas.length; i++){
  console.log(notas[i]);
}
```
Este tipo de constructo es raro de ver al inicio, pero con el tiempo se hace más sencillo. Unas alternativas más sencillas de usar son `for of` para recorrer arreglos y `for in` para recorrer objetos.

```js
let notas = [50, 70, 90];
for(let nota of notas){
  console.log(nota);
}

let notasObjeto = {p1: 50, p2: 70, p3: 90};
for(let nombre in notas){
  notas[nombre];
}
```
Observar que:
- Un bucle se construye con la palabra clave `for` seguido de tres elementos: `(inicio; condicion; incremento/decremento)`. 
  - Se inicia con una variable, en este caso `i`
  - El bucle se ejecutará solo mientras la condición sea verdadera. En este caso solo mientras que `i` sea menor que la longitud del arreglo `notas`
  - En cada vuelta se incrementará `i` con 1.
- En el cuerpo del bucle se imprime cada elemento dentro del arreglo `notas`, ya que `i` va incrementándose en cada vuelta, de 0 a 2.
- Esta es un bucle definido porque sabemos la cantidad de veces que se repetirá.

Por otro lado, tenemos el bucle `while`, cuando no sabemos el número exacto de repeticiones, pero sí queremos que algo se repita mientras una condición sea verdadera. Por ejemplo para sumar:

```js
let notas = [50, 70, 90];
let suma = 0;

while (notas.length > 0) {
  suma += notas.shift();
}
console.log(suma);
```
Ten cuidado de entrar a bucles infinitos no controlados, que consumen muchos recursos de tu computadora y pueden crashearla.

## Programación web con JS
Todo lo que vimos hasta ahora fueron conceptos de programación general, que otros lenguajes de programación también lo tienen a su forma. Ahora veremos conceptos relacionados directamente con la manipulación de una página web, el navegador y su interacción.

### El DOM
El DOM (Document Object Model) es una representación de toda la página web con sus elementos HTML y CSS pero en forma de objetos. Con el DOM y JavaScript podemos de forma programática:
- Crear y eliminar elementos HTML
- Modificar atributos HTML
- Modificar los estilos CSS
- Interactuar con los eventos

Lo primero es aprender a recorrer el DOM para poder ubicar los elementos que quieres modificar. El objeto principal es `document`, donde están el resto de elementos:

```js

```

![](img/dom-traversal.png)

### Estilos con JS

### Eventos

## Una mini app web completa