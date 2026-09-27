# Lectura previa · Sesión 01 · React, Vite y JSX

## Propósito

Llegar a la sesión con una primera definición de componente y reconocer el comando que crea un proyecto React con TypeScript. Durante la clase usarás ese vocabulario para construir el primer árbol de componentes de Medialog.

- **Tiempo estimado:** 20 minutos
- **Entrega:** cuestionario cerrado en la plataforma institucional antes de la clase
- **Stack de la cohorte:** React `19.2.8`, React DOM `19.2.8`, `create-vite@9.2.0` y pnpm `11.17.0`
- **Fecha de verificación de fuentes:** 29 de agosto de 2026

## Conocimientos previos

- Reconocer etiquetas HTML como `header`, `main`, `article`, `h1` y `p`.
- Abrir una terminal y ejecutar un comando.
- Reconocer una función de JavaScript.
- Ubicar archivos y carpetas desde el editor.

No necesitas conocer props, estado, TypeScript avanzado ni herramientas de build.

## Fuente principal · Componentes de React

**React · [Your First Component](https://react.dev/learn/your-first-component)**

Lee estas secciones:

1. `Components: UI building blocks`.
2. `Defining a component`.
3. `Using a component`.
4. `Nesting and organizing components`.

Detén la lectura antes de los desafíos. Busca respuestas para estas preguntas:

- ¿Qué forma tiene un componente React?
- ¿Por qué el nombre de un componente comienza con mayúscula?
- ¿Qué diferencia visible existe entre declarar `Profile` y escribir `<Profile />`?
- ¿Cómo puede un componente usar otros componentes?

La documentación corresponde a React 19. El curso fija React `19.2.8` para reproducir sus checkpoints.

## Fuente secundaria · Crear un proyecto con Vite

**Vite · [Getting Started](https://vite.dev/guide/)**

Lee únicamente:

1. `Overview`.
2. `Scaffolding Your First Vite Project` hasta la lista de templates admitidos.

En las pestañas de comandos, selecciona **pnpm**. Identifica:

- qué dos capacidades principales aporta Vite;
- qué comando inicia el generador;
- qué template combina React y TypeScript.

La verificación usó `create-vite@9.2.0`. Ese scaffold resolvió Vite `8.2.2` el 29 de agosto de 2026. La sesión fijará el generador para evitar que el comando cambie durante la cohorte.

## Recorrido sugerido

1. Dedica 12 minutos a la fuente de React.
2. Escribe en una línea la diferencia entre `function Profile()` y `<Profile />`.
3. Dedica 6 minutos a la fuente de Vite.
4. Anota el nombre del template React con TypeScript.
5. Usa los últimos 2 minutos para responder el cuestionario.

No ejecutes todavía el scaffold. Lo construiremos juntos durante la sesión para reconocer cada archivo inicial.

## Vocabulario previo

- **Interfaz de usuario:** parte visible e interactiva de una aplicación.
- **Componente:** función de React que devuelve marcado y representa una parte de la interfaz.
- **Composición:** uso de componentes dentro de otros componentes.
- **JSX:** sintaxis similar a HTML que aparece dentro de código JavaScript o TypeScript.
- **Scaffold:** estructura inicial de archivos creada por una herramienta.
- **Template:** variante de scaffold preparada para un stack concreto.
- **Servidor de desarrollo:** proceso local que sirve la aplicación mientras trabajas.

## Cuestionario previo

### Pregunta 1 · Opción múltiple

¿Qué es un componente de React?

- A. Un archivo HTML que el navegador descarga sin JavaScript.
- B. Una función de JavaScript que devuelve la interfaz de una parte de la aplicación.
- C. Un comando que instala dependencias del proyecto.
- D. Una hoja de estilos que Vite transforma durante el build.

### Pregunta 2 · Verdadero o falso

Para que React lo distinga de una etiqueta HTML, el nombre de un componente debe comenzar con mayúscula.

- Verdadero
- Falso

### Pregunta 3 · Opción múltiple

¿Qué hace `<Profile />` en el ejemplo?

- A. La declaración de una variable global.
- B. El comando que crea el proyecto.
- C. Muestra el componente `Profile` dentro de otro componente.
- D. El elemento raíz de `index.html`.

### Pregunta 4 · Opción múltiple

¿Qué plantilla de Vite crea un proyecto con React y TypeScript?

- A. `react`
- B. `react-ts`
- C. `vanilla-ts`
- D. `typescript-react-app`

### Pregunta 5 · Opción múltiple

¿Qué ofrece Vite mientras desarrollas el proyecto?

- A. Administrar la sesión autenticada del usuario.
- B. Guardar datos remotos en caché.
- C. Un servidor de desarrollo para ejecutar el proyecto.
- D. Convertir cada etiqueta HTML en un componente React.

## Entrega

Envía una respuesta por pregunta en la plataforma indicada por el docente. El archivo de lectura no marca las respuestas correctas; la clase recuperará las preguntas con mayor porcentaje de error.
