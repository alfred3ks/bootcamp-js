/*
Que es JavaScript:

Breve historia:
En 1995 Brendan Eich creo JavaScript para ser el primer lenguaje de programacion que se utilizara dentro del navegador Netscape.

En los 90´s el lenguaje mas utilizado por muchos era JAVA, originalmente el equipo detras de Netscape penso en utilizar JAVA. La idea fue descartada rapidamente y decidieron crear un nuevo lenguaje.

Brendan Eich, se dice, creo JavaScript en solo 10 dias y aunque la sintaxis era similar a la de JAVA, venia con algunas de las caracteristicas que distinguen al lenguaje, funciones de primera clase, tipado dinamico y herencia de prototipos.

Originalmente el nombre del lenguaje fue Mocha, luego LiveScript y finalmente JavaScript.

En 1997 Nestcape delego la responsabilidad de mantener el lenguaje a la European Computer Manufactures Association (ECMA) para que estandarizara el lenguaje.

Un dato interesante es que originalmente Sun Microsystems, en 2009 Oracle compro Sun y por lo tanto hoy en dia la marca JavaScript le pertenece a Oracle. La marca.

Esto origino que ECMA al no poder hacerse con el nombre de JavaScript y para evitar problemas con Oracle decidieron llamarlo ECMAscript. JavaScript es un nombre comercial que pertence a Oracle pero no esta asociado al desarrollo del lenguaje, para eso es ECMAScript.

Que es ECAMScript:

El estandar ECMA-262 describe el lenguaje ECMAScript, un lenguaje de proposito general. En esta especificacion del lenguaje se describe la sintaxis, y las caracteristicas del lenguaje, como debe funcionar y basicamente los detalles del lenguaje.

Entre las caracteristicas:
- Lenguaje orientado a objetos,
- Originalmente lenguaje de scripting,
- Se define los objetos base,
- Se definen los operadores base,
- Soporte a modulos,
- Sintaxis similar a java.

Entonces ECMAScript es una descripcion del lenguaje que requiere de una implementacion, es un documento, son reglas, son textos que describen las caracteristicas y el funcionamiento del lenguaje.

El grupo TC39 es un grupo conformado por desarrolladores independientes, y de distintas empresas como Google, Apple y Firefox que define y desarrollan la propuesta para añadir a la especificacion.

--- JavaScript y el motor de ejecucion: ---
Podemos decir que el motor de ejecucion es la implementacion de la especificacion, estos son los programas que reciben como entrada un archivo escrito usando la sintaxis de JS, y cuya salida es la ejecucion de este programa.

Existen distintos motores de ejecucion, algunos ejemplos son V8, SpiderMonkey, Chakra, entre otros.
El mas popular V8 usado por Chrome y NodeJS.

Estos motores de ejecucion se encargan entre otras cosas en el trabajo de optimizacion de tu codigo, un proceso que muchas veces incluye que el codigo sea pasado a lenguaje maquina antes de ejecutarlo.

--- JavaScript y el entorno de ejecucion: ---
ECMAScript es un lenguaje que no esta diseñado para ser auto suficiente, mas bien requiere de un entorno. Por ejemplo, la especificacion no incluye elementos para entrada o salida de datos, por lo que se espera que el entorno provea de los objetos necesarios para estas aplicaciones, cosas que otros lenguajes si lo hacen como python.

Por ejemplo:

console.log() -> no pertenece al lenguaje, si al entorno, en caso windows.

En el JavaScript moderno hay dos principales entornos de ejecucion, el de los navegadores y nodejs.

La tarea de estos entornos de ejecucion es de proveer de APIs para complementar el lenguaje y que este pueda ser usado para distintas tareas y propositos en cada entorno.

En el caso del navegador las Web APIs nos permiten acceder al DOM, manipularlo, hacer tareas asincronas, consultar datos, aplicar animaciones, acceder al hardware del equipo y mas.

En el caso de nodejs o alternativas con deno, las APIs nos permiten acceder a la red, a los puertos, a los archivos del sistema, entre otros.

¿Entonces que es JavaScript?

Cuando hablamos de JavaScript estamos usando su nombre comercial que describe al estandar, el motor y el entorno de ejecucion.

Decimos que programamos con JavaScript en el navegador y nos referimos posiblemente a que usamos el lenguaje descrito en el estandar ECMAScript, usando el motor V8, y el navegador como entorno de ejecucion.

Decimos que programamos con JavaScript en el servidor y esto quiere decir que probablemente usamos ECMAScript, el V8 y nodejs como entorno de ejecucion.

El bootcamp esta dividido en dos partes principales, las primeras clases hablan y describen el lenguaje de programacion, es decir lo descrito en el estandar, mientras que la segunda parte habla del entorno de ejecucion, el frontend, las APIs del navegador.

*/