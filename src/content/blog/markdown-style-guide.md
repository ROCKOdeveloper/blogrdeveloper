---
title: 'Introducción a Markdown'
description: 'Este documento está diseñado para ayudarte a dominar la creación de contenido estructurado y legible utilizando Markdown'
pubDate: 'Nov 02 2022'
heroImage: 'https://www.markdownguide.org/assets/images/markdown-mark-white.svg'
---

Este documento está diseñado para ayudarte a dominar la creación de contenido estructurado y legible utilizando Markdown. Ya sea que estés escribiendo documentos, blogs, o mensajes en línea, Markdown ofrece una sintaxis sencilla y eficaz para formatear tu texto.

<br>

Esta guía abarca desde los fundamentos, como encabezados y párrafos, hasta elementos más avanzados, como tablas y bloques de código. Todo con ejemplos en código y su respectivo resultado.

<br>

## **Encabezados**

Los siguientes elementos HTML `<h1>`—`<h6>` representan seis niveles de encabezados de sección. `<h1>` es el nivel más alto, mientras que `<h6>` es el más bajo.

<br>

```markdown
# H1

## H2

### H3

#### H4

##### H5

###### H6

```

<br>

## **Salida**

<br>

# H1

## H2

### H3

#### H4

##### H5

###### H6

<br>

---

## **Párrafos**

La creación de párrafos es tan sencilla como escribir texto en líneas consecutivas. Simplemente, deja una línea en blanco entre dos bloques de texto para separarlos en párrafos distintos.

<br>

```markdown
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero veritatis modi neque distinctio tempore! Esse numquam, sunt, dignissimos perferendis alias, harum inventore mollitia blanditiis necessitatibus ad consequuntur corporis sed qui.
```

<br>

## **Salida**

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero veritatis modi neque distinctio tempore! Esse numquam, sunt, dignissimos perferendis alias, harum inventore mollitia blanditiis necessitatibus ad consequuntur corporis sed qui.

<br>

## **Imagenes**

En Markdown, insertar imágenes es un proceso simple y directo. Utiliza la siguiente sintaxis para agregar una imagen:

<br>

```markdown
![Texto alternativo](./ruta/de/la/imagen.jpg)
```

<br>


<br>

## **Citas en bloque**

<br>

Citas en bloque representa contenido citado de otra fuente. Para agregar una citación en bloque, utiliza la siguiente sintaxis:

<br>

```markdown
> Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
```

<br>

## **Salida**

> Lorem ipsum dolor, sit amet consectetur adipisicing elit.  

<br>

## **Tablas**

En Markdown, las tablas son fáciles de crear utilizando una combinación de barras verticales `|` y guiones `-`. Utiliza la siguiente sintaxis para agregar una tabla:

<br>

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

<br>

## **Salida**

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

<br>

## **Bloque de codigo**

En Markdown, puedes resaltar bloques de código de manera simple y efectiva.
Usar 3 acentos graves ` ``` ` en una nueva línea, escribir el fragmento y cerrar con 3 acentos graves en una nueva línea. Para resaltar la sintaxis específica del lenguaje, escribe una palabra del nombre del lenguaje después de los primeros 3 acentos graves, por ejemplo, html, javascript, css, markdown, typescript, txt, bash.

<br>

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

<br>

## **Salida**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

<br>

## **Tipos de listas**

<br>

listas ordendas

```markdown
1. First item
2. Second item
3. Third item
```

<br>

Lista desordenada

```markdown
- List item
- Another item
- And another item
```

<br>

listas anidadas

```markdown
1. First item
  - First subitem
  - Second subitem
  - Third subitem
2. Second item
3. Third item
```

<br>

## **Línea horizontal**

Para hacer una discreta división entre elementos, usa una línea horizontal ` --- `.

<br>

``` markdown
---
```

(en desarrollo)