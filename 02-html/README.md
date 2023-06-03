# HTML
## Sintaxis de un elemento HTML

Escribir en HTML implica escribir elementos HTML. Un elemento HTML tiene la siguiente sintaxis básica:

```html
<etiqueta>Contenido</etiqueta>
```
Notar que:
- Existen etiquetas
  - Las etiquetas se suelen usan en pares
    - Hay una etiqueta de apertura con el nombre de la etiqueta
    - Hay una etiqueta de cierre con una barra `\` y el nombre de la etiqueta
  - Las etiquetas se envuelven en parentesis angulares: `<` y `>`, también conocidos como los símbolos de `menor que` y `mayor que`
- Existe un contenido
  - Que suele ser texto normal o también como veremos más adelante puede ser otro elemento HTML
  - Que está envuelto o anidado por las etiquetas

Ejemplos típicos de etiquetas son:
- `<h1>`, `<h2>`, `<h3>` para encabezados de diferentes niveles
- `<p>`: para marcar párrafos
- `<a>`: para marcar enlaces
- `<img>`: para mostrar imagenes. Este es una etiqueta especial pues no tiene etiqueta de cierre, a diferencia de los anteriores.

Asimismo los elementos HTML pueden tener atributos, que proveen información adicional a los elementos:

```html
<!-- con un solo atributo -->
<etiqueta clave="valor">Contenido</etiqueta>

<!-- con varios atributos -->
<etiqueta clave="valor" clave="valor" clave="valor">Contenido</etiqueta>

<!-- cuando son muchos atributos se pueden escribir los atributos en varias lineas para mayor claridad -->
<etiqueta 
    clave="valor"
    clave="valor"
    clave="valor">
    Contenido
</etiqueta>

```
Notar que:
- Los atributos se ponen dentro de la etiqueta de apertura, no en el contenido ni en la etiqueta de cierre. 
- Notar que hay un espacio luego del nombre de la etiqueta para escribir el primer atributo.
- Los atributos tienen su propia sintaxis
  - Empiezan con el nombre de la clave, seguido por un símbolo de `=`, y finalmente el valor envuelto entre comillas `" "`. Todo sin espacios.
  - Si hay más de un atributo se los separa por un espacio
  - A diferencia de los nombres de las etiquetas HTML, los nombres de los atributos no llevan parentesis angulares

Ejemplos típicos de atributos son:
- Para cualquier elemento
  - `id`: para especificar un nombre único de ese elemento y luego acceder a él con CSS o JS
  - `class`: para especificar un nombre de clase (grupo) y luego acceder a todos ellos con CSS o JS
- Para el elemento `<a>`:
  - `href`: para especificar la ruta de la página donde debe dirigir el enlace
- Para el elemento `<img>`
  - `src`: para especificar la ruta de la imagen que se quiere mostrar

```html
<!-- uso de id -->
<p id="parrafo-1">Mi primer párrafo</p>

<!-- uso de clase -->
<ul class="listas"></ul>
<ul class="listas"></ul>
<ul class="listas"></ul>

<!-- uso de href -->
<a href="https://www.google.com/">Ir a Google</a>

<!-- uso de src -->
<img src="mi-imagen.jpg">

```

## El arbol HTML

La utilidad de HTML reside en poder combinar los elementos básicos para crear estructuras más complejas. Para ello debemos formar un "arbol" de elementos HTML.

Un arbol es una estructura de organización muy común, que puedes encontrarla, por ejemplo, en tu sistema de archivos. Es una jerarquía de elementos, también llamados en este contexto como "nodos":

![](img/arbol.png)

Y se puede describir con la siguiente terminología:
- Como un arbol biológico
  - Raiz: el primer nodo de donde descienden todos los demás
  - Rama: las ramificaciones que se desprenden de algún nodo.
  - Nodo interno: los nodos que no son raiz ni hojas y tienen tanto ascendientes como descendientes
  - Hoja: los nodos sin descendientes
- De arbol genealógico
  - Ancestro
  - Descendientes
  - Padre
  - Hijo o hijos
  - Hermano o hermanos

El árbol básico de HTML es el siguiente. Deberas siempreo escribir esta primera estructura:

```html
<html>
  <head></head>
  <body></body>
</html>
```
Donde:
- El nodo raiz es el elemento `<html>`
- La raiz tiene dos descendientes:
  - `<head>`: para incluir metadatos
  - `<body>`: aquí pondrás los elementos que quieres que se visualicen en el navegador.

Ya en `<body>` podemos crear un sub-arbol de diversas maneras, por ejemplo si hicieramos una hoja de vida web:

```html
<html>
  <head></head>
  <body>
    <h1>Juan Perez</h1>
      <p>Un profesional de la información</p>
    <h2>Experiencia de trabajo<h2>
      <ul>
        <li>Empresa 1</li>
        <li>Empresa 2</li>
        <li>Empresa 3</li>
      </ul>
    <h2>Estudios</h2>
      <ol>
        <li>Escuela</li>
        <li>Colegio</li>
        <li>Universidad</li>
      </ol>
  </body>
</html>
```

> ## Tarea 1
> - Agregar una imagen suya
> - Agregar enlace a sus redes sociales, pero con imagenes de las redes en vez de solo texto y deben abrir el enlace en una nueva pestaña
> - Agregar una tabla  con la primera columna que diga sus habilidades y la segunda su calificación del 1 al 10
>
> Puedes usar Google para resolver esta tarea, pero no IA como ChatGPT.

## Elementos para metadatos en `<head>`

En el `<head>` podemos agregar metadatos, que es información sobre el contenido, que no se visualiza directamente en el navegador, pero sirve para clasificar el contenido y una mejor indexación por parte de los motores de búsqueda.

Los más utiles, de momento, son:
- `<title>`: para agregar el título y se verá en la pestaña y los resultados de buscadores
- `<meta name="" content="">`: para agregar metadatos específicos como descripción, autor y palabras clave.

```html
<html>
  <head>
    <title>Hoja de vida de Juan Perez</title>
    <meta name="description" content="La hoja de vida de Juan Perez">
    <meta name="author" content="Juan Perez">
    <meta name="keywords" content="Hoja de vida, Portafolio, CV">
  </head>
  <body></body>
</html>
```

También en el `<head>` se suelen enlazar archivos CSS y JS como veremos más adelante.

## Agrupar elementos: divs y spans



## Etiquetas semánticas