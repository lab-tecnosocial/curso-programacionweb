# CSS

## Sintaxis

CSS se escribe de la siguiente forma:

```css
selector {
    propiedad1: valor;
    propiedad2: valor;
    propiedad3: valor;
}
```
Donde:
- Se empieza con un selector, que apunta al elemento al que se quiere cambiar de estilo. Puede ser el nombre de la etiqueta, la clase o el di (ver siguiente sección)
- Se agrega un bloque de declaraciones, que empieza con una llave de apertura `{` y termina con una llave de cierre `}`
- En el bloque se agregan declaraciones de estilo separadas por punto y coma (`;`)
- Cada declaración tiene tres partes:
  - Propiedad: La característica visual que se quiere cambiar
  - Separador: Entre propiedad y valor que son los dos puntos: `:`
  - Valor: El valor específico de la propiedad que se quiera cambiar. Si es más de un valor, entonces se separa con un espacio.

Por ejemplo:
```css
h1 {
  font-size: 16px;
  color: blue;
  background-color: gray;
}
```
## Selectores básicos
Aquí veremos cuatro selectores básicos, luego en otra sección veremos otros selectores más avazandos.

Selector de etiquetas. Para apuntar a modificar etiquetas simplemente debemos anotar el nombre de la respectiva etiqueta. Notar que el nombre de l etiqueta en CSS va sin los parentesis angular:

```css
h1 {

}
p {

}
a {

}
img {

}
```
Selector de clases. Para apuntar a modificar clases enteras. Se debe escribir el nombre de la clase antecedido por un punto (`.`):

```css
.mi-clase {

}
.lista {

}
```
Selector de ids. Para apuntar a modificar un elemento identificado. Se debe escribir el nombre del id antecedido por el simbolo de numeral (`#`):
```css
#titulo-principal {

}
#resaltado {

}
```

Selector universal. Para modificar todos los elementos se usa el símbolo de asterisco (`*`):

```css
* {
  font-size: 14px;
}
```

## 3 formas de usar CSS

Para usar CSS con HTML se puede proceder de tres formas:

- CSS en linea. Aquí no se necesita usar selectores, sino que el CSS va directamente dentro de los elementos HTML usando el atributo `style`. La sintaxis de las declaraciones ya mencionada debe respetarse:

```html
<h1 style="font-size: 10px; text-align: center">Titulo principal</h1>
<p style="color: blue">Este es un párrafo...</p>
```
- CSS interno. Aquí el CSS se pone el CSS separado de los elementos HTML, pero en el mismo archivo, con la etiqueta `<style>` dentro de la etiqueta `<head>`. Aquí se hacen uso de los selectores:
```html
<html>
  <head>
    <style>
      h1 {
        font-size: 10px; 
        text-align: center;
      }
      p {
        color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Titulo principal</h1>
    <p>Este es un párrafo...</p>
  </body>
</html>
```
- CSS externo. Aquí el CSS se escribe un archivo aparte, normalmente `style.css`. Para que funcione es necesario enlazar ese archivo desde el archivo HTML, normalmente `index.html`. Aquí se usa la etiqueta `<link>` para enlazar y luego se escribe CSS puro en el archivo `style.css`:
  
```html
<!-- index.html -->
<html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Titulo principal</h1>
    <p>Este es un párrafo...</p>
  </body>
</html>
```
```css
/* style.css */
  h1 {
      font-size: 10px; 
      text-align: center;
      }
  p {
      color: blue;
  }
```
## Propiedades básicas de CSS: tipografía y color

Dos conjuntos de propiedades básicas muy utilizados y básicos en el tema del estilo son: la tipografía y el color. Aquí los describiremos.

Para la tipografía (o fuente) se pueden usar las siguientes las siguientes propiedades básicas:
  - `font-family`: Para cambiar el tipo de fuente. Los básicos son: Arial, Verdana, Tahoma, 'Times New Roman', Georgia, Garamond, 'Courier New'. Pero si se quieren añadir otras fuentes se puede usar [Google Fonts](https://fonts.google.com/).
  - `font-size`: Para definir el tamaño de texto. Acepta diversas unidades tanto absolutas como relativas: `px`, `em`, `%`, etc.
  - `font-weight`: Para definir el peso de la fuente. Acepta valores como `normal`, `lighter`, `bold` o algún número.
  - `font-style`: Para cambiarlo a `italic` u `oblique`.
  - `text-align`: Para alinear el texto. Recibe `left|right|center|justify|`

También para la tipografía existen unas propiedades más avanzadas como:
- `text-transform`
- `word-spacing`
- `letter-spacing`
- `line-height`

Sobre el color tenemos las siguientes propiedades:
- Color frontal
  - `color`: afecta al color de frente, normalmente el texto.
- Color de fondo o imagen de fondo
  - `background-color`: Afecta al color de fondo.
  - `background-image`: Opcionalmente se puede poner en vez de un color, una imagen de fondo.
- Opacidad
  - `opacity`: Controla la opacidad del elemento. El valor va entre 0 y 1, pudiendo recibir valores decimales.

Ahora bien, la forma de especificar el color tiene variaciones. Se puede especificar el color en al menos cuatro formas:

- Colores nombrados: que vienen en forma de texto, por ejemplo: red, white, blue, black, etc. Una lista completa de colores nombrados, que son 140, puede verse [aquí](https://www.w3schools.com/cssref/css_colors.php).
- RGB: significa Red, Green, Blue. Es una función que especifica esos tres parametros de colores primarios, que son enteros que van de 0 a 255. Por ejemplo, `rgb(255, 0, 0)1` es el rojo
- Hexadecimal: Similar al anterior, pero especificados con dos digitos hexadecimales por color `#RRGGBB`. Por ejemplo, el rojo es `#FF0000`
- HSL: Una alternativa a RGB, que usa Hue (tono), Saturation (saturación) y Lightness (luminosidad). Donde tono recibe un grado entre 0 y 360 de la rueda del color, y saturación y luminosidad reciben un porcentaje de 0 a 100.

## El módelo de caja (box model)

Todo elemento en HTML está rodeado de una caja, a veces invisible y otras visible. Esto incluye elementos como `<p>`, `<h1>`, `<img>`, `<body>`, etc.

Esta caja tiene cuatro capas:

![](pizarra/img/box-model1.png)

Si vamos de adentro para afuera, estas cuatro capas son:

- Contenido. Este se especifica con las propieades `width` y `height`
- Borde. Se define con la propiedad `border`
- Relleno. Es el espacio interno a partir del borde. Se define con la propiedad `padding`
- Margen. Es el espacio interno a partir del margen. Se definie con la propiedad `margin`

Por ejemplo, si quisieramos crear párrafos con más estilo:

```html
<html>
  <head>
    <style>
      p {
        width: 100px;
        height: 100px;
        border: solid 2px black;
        padding: 10px;
        margin: 5px auto;
      }
    </style>
  </head>
  <body>
    <p>Párrafo 1...</p>
    <p>Párrafo 2...</p>
  </body>
</html>
```
Queda por resultado:

![](pizarra/img/ej-box-model.png)

Asimismo, se puede definir de forma más granular estos parametros especificando que lado del cuadrado queremos modificar (top, right, bottom, left):

![](pizarra/img/box-model2.png)


Extra: contorno. Es el contorno luego del margen y se especifica con `outline`. Si bien no pertenece propiamente al box model, suele ser útil.

> Tarea: Averigua qué tipos de valores y formas de uso tienen los parametros que vimos:
> - width
> - height
> - border
> - padding
> - margin
