---
title: 'Introducción a Markdown'
description: 'Este documento está diseñado para ayudarte a dominar la creación de contenido estructurado y legible utilizando Markdown'
pubDate: 'Nov 02 2022'
heroImage: 'https://www.markdownguide.org/assets/images/markdown-guide-og.jpg'
---
Markdown es un lenguaje de marcado ligero creado por John Gruber y Aaron Swartz en 2004. La idea detrás de Markdown era simple: diseñar un sistema fácil de entender y usar para dar formato al texto sin necesidad de utilizar un lenguaje más complejo como HTML. El objetivo era permitir que cualquier persona, incluso sin conocimientos técnicos, pudiera crear contenido atractivo y bien formateado.

<br>

Este documento contiene el conocimiento introductorio, la sintaxis básica de la creación de contenido estructurado y legible utilizando Markdown. Ya sea que estés escribiendo documentos, blogs o mensajes en línea, Markdown ofrece una sintaxis sencilla y eficaz para formatear tu texto.

<br>

## **Títulos y encabezados**

Se crean utilizando el símbolo #. Cuantos más # uses, menor será el tamaño del título.

<br>

```markdown
# Texto

## Texto

### Texto

#### Texto

##### Texto

###### Texto
```

<br>

## **Párrafos y salto de línea**

Markdown trata automáticamente las líneas consecutivas como párrafos. Para un salto de línea sin un nuevo párrafo, se utiliza dos espacios al final de la línea.

<br>

```markdown
Este es un parrafo.


Este es otro parrafo despues de un salto de linea.
```

<br>

## **Formateo de texto**

Estos formatos proporcionan una manera rápida y sencilla de mejorar la legibilidad y la expresividad de tu texto en Markdown.

<br>

```markdown
**Negrita** 
_Italic_ 
`Code`
~~Tachado~~
```

<br>

## **Listas ordenadas y no ordenadas**

Las listas ordenadas se crean enumerando elementos con números. Las listas no ordenadas comienzan cada elemento con un guion o asterisco. Los subelementos se indentan.

<br>

```markdown
1. item
  1. subitem
2. item
3. item

- item
  - subitem
- item
- item
```

<br>

## **Citas en bloque**

Citas en bloque representa contenido citado de otra fuente. Para agregar una citación en bloque, utiliza la siguiente el simbolo `>` en la primera linea.

<br>

```markdown
> Esto es una cita.
```

<br>

## **Línea horizontal**

Una línea horizonral secrea utilizando tres guiones `---` o tres asteriscos `***` en una linea.

<br>

```markdown
---

***
```

<br>

## **Enlaces**

Los enlaces se crean utilizando corchetes para el texto del enlace y paréntesis para la URL.

<br>

```markdown
[Texto del enlace](http://www.ejemplo.com)
```

<br>

## **Imagenes**

Las imágenes se insertan de manera similar a los enlaces, pero con un signo de exclamación `!` antes de los corchetes.

<br>

```markdown
![Texto alternativo](./ruta/de/la/imagen.jpg)
```

<br>

## **Tablas**

Las tablas son fáciles de crear utilizando una combinación de barras verticales `|` y guiones `-`. Utiliza la siguiente sintaxis para agregar una tabla:

<br>

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

<br>

## **Bloque de codigo y en línea**

Usar 3 acentos graves ` ``` ` en una nueva línea, escribir el fragmento y cerrar con 3 acentos graves en una nueva línea. Para resaltar la sintaxis específica del lenguaje, escribe una palabra del nombre del lenguaje después de los primeros 3 acentos graves, por ejemplo, html, javascript, css, markdown, typescript, txt, bash.

<br>

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>HTML5 Document</title>
  </head>
  <body>
    <h1>Title</h1>
    <p>Test</p>
  </body>
</html>
```
````

<br>

````markdown
`print("Hello world!")`
````

<br>

En conclusión, Markdown se presenta como una herramienta sorprendentemente poderosa y accesible para dar forma a tu contenido digital. Su sintaxis sencilla y versátil te libera de las complicaciones del formateo, permitiéndote centrarte plenamente en la creación de contenido significativo.

<br>

Este es solo el aspecto más básico. Puedes visitar la página oficial y convertirte en un experto en Markdown. visita [Markdownguide.org](https://www.markdownguide.org/)
