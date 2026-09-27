# Lectura previa · Sesión 03 · Composición y catálogo estático

## Propósito

Llegar al taller con un criterio inicial para dividir una interfaz estática en componentes y reconocer cómo un componente puede devolver JSX distinto según sus props. Durante la sesión reorganizarás el catálogo sin añadir estado o interacción.

- **Tiempo estimado:** 22 minutos
- **Entrega:** cuestionario cerrado en la plataforma institucional antes de la clase
- **Stack de la cohorte:** React `19.2.8`, TypeScript `6.0.3` y pnpm `11.17.0`
- **Fecha de verificación de fuentes:** 29 de agosto de 2026

## Conocimientos previos

- Checkpoint completo de la sesión 02.
- Componentes, props y flujo padre-hijo.
- `MediaItem[]`, `map` y `key`.
- Renderizado de valores desde un objeto.
- Comprobación visual mediante `pnpm dev`.

No necesitas estado, eventos, Effects, APIs o una librería de componentes.

## Fuente principal · Jerarquía y versión estática

**React · [Thinking in React](https://react.dev/learn/thinking-in-react)**

Lee estas secciones:

1. Introducción hasta los cinco pasos.
2. `Step 1: Break the UI into a component hierarchy`.
3. `Step 2: Build a static version in React` hasta el final del aviso `Pitfall`.

Detén la lectura antes de `Step 3: Find the minimal but complete representation of UI state`. La sesión 03 termina una interfaz estática; el estado comienza en la sesión 04.

Busca respuestas para estas preguntas:

- ¿Qué preguntas ayudan a decidir si una parte de la interfaz merece un componente?
- ¿Cómo se representa la jerarquía padre-hijo?
- ¿Cómo viajan los datos durante la construcción de una versión estática?
- ¿Por qué una versión estática no necesita estado?

La documentación corresponde a React 19. El proyecto fija React `19.2.8`.

## Fuente secundaria · Devolver JSX según una condición

**React · [Conditional Rendering](https://react.dev/learn/conditional-rendering)**

Lee únicamente:

1. Introducción.
2. `Conditionally returning JSX`.
3. `Conditionally returning nothing with null`.

Detén la lectura antes de `Conditionally including JSX`. Durante la clase usaremos un `if` con retorno temprano para que la decisión de colección vacía sea visible.

Identifica:

- qué lenguaje controla las condiciones dentro de un componente React;
- cómo una función componente puede tener más de un retorno;
- qué relación existe entre una condición y el árbol que React renderiza.

La lectura muestra técnicas generales. No contiene los nombres, textos o estructura exacta del taller.

## Recorrido sugerido

1. Dedica 14 minutos a `Thinking in React`.
2. Dibuja el árbol del catálogo de la sesión 02 con `App` y `MediaCard`.
3. Dedica 6 minutos a `Conditional Rendering`.
4. Usa los últimos 2 minutos para responder el cuestionario.

No extraigas componentes antes de la clase. El grupo necesita observar el mismo punto de entrada para decidir los límites juntos.

## Vocabulario previo

- **Jerarquía:** organización padre-hijo de los componentes.
- **Composición:** combinación de componentes para construir una interfaz.
- **Responsabilidad:** parte de la interfaz o flujo que un componente posee.
- **Versión estática:** interfaz que presenta datos sin que una interacción los cambie.
- **Flujo descendente:** datos que un padre entrega a sus hijos mediante props.
- **Renderizado condicional:** selección del JSX que una función devuelve según una condición.
- **Retorno temprano:** retorno ejecutado antes de la salida principal de una función.
- **Refactorización:** cambio de organización que conserva el comportamiento visible.

## Cuestionario previo

### Pregunta 1 · Opción múltiple

¿Cuándo conviene separar una parte de la interfaz en un componente?

- A. Cuando cumple una responsabilidad clara dentro de la interfaz.
- B. Que cada etiqueta HTML viva en un archivo distinto.
- C. Que el archivo resultante tenga menos de diez líneas.
- D. Que el componente declare estado propio.

### Pregunta 2 · Verdadero o falso

Una interfaz estática puede mostrar datos recibidos por props sin usar estado.

- Verdadero
- Falso

### Pregunta 3 · Opción múltiple

¿Cómo pasan los datos entre los componentes de la versión estática?

- A. Los hijos modifican directamente los datos del padre.
- B. Pasan de los componentes padres a los componentes hijos.
- C. Cada componente importa la misma fuente de datos.
- D. El navegador reparte los datos entre componentes hermanos.

### Pregunta 4 · Opción múltiple

¿Qué puede usar un componente para elegir qué JSX devolver?

- A. Solo una librería externa.
- B. Una condición `if` de JavaScript.
- C. Una hoja CSS separada.
- D. Un segundo elemento `root` en HTML.

### Pregunta 5 · Verdadero o falso

Un componente puede mostrar una interfaz diferente cuando recibe props diferentes.

- Verdadero
- Falso

## Entrega

Envía una respuesta por pregunta en la plataforma indicada por el docente. Este archivo no marca las respuestas correctas. El docente recuperará la pregunta con mayor porcentaje de error durante la apertura.
