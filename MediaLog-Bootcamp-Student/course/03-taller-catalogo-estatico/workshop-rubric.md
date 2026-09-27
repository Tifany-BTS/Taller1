# Taller y rúbrica · Sesión 03 · Catálogo estático compuesto

- **Modalidad:** presencial
- **Tiempo calificable:** 60 minutos
- **Puntaje base:** 100 puntos
- **Puntaje extra disponible:** 5 puntos
- **Puntaje bruto máximo:** 105 puntos
- **Nota registrada:** `min(puntaje bruto, 100)`

## Resultado que debes demostrar

Completarás un catálogo estático donde cada componente tenga una responsabilidad reconocible. El resultado debe representar una colección completa o vacía, conservar los casos del fixture y mantener el flujo descendente de props sin estado.

## Punto de partida

Comienza desde el checkpoint previo al taller:

- `App` entrega `mediaItems` a `MediaGrid`.
- `MediaGrid` recibe `items: MediaItem[]`.
- `MediaGrid` contiene `.media-list`, `map` y `media.id` como key.
- El fixture completo muestra seis tarjetas.
- Película, serie, poster nulo y descripción nula funcionan.
- Una colección vacía todavía no muestra un mensaje.
- `MediaTypeBadge` y `EmptyState` no existen.

Si no alcanzaste ese estado antes del descanso, solicita `session-03-workshop-start`.

## Escenario

“Catálogo de la semana” debe explicar cuando no recibe medios y debe presentar el tipo de cada medio mediante un componente específico. Reorganiza estas responsabilidades sin cambiar el fixture ni añadir interacción.

## Trabajo obligatorio

1. Crear `EmptyState` con props `title` y `description`.
2. Hacer que `MediaGrid` muestre ese componente cuando `items.length === 0`.
3. Usar “Catálogo vacío” y “No hay películas o series disponibles”.
4. Crear `MediaTypeBadge` con `mediaType: MediaType`.
5. Mostrar “Película” para `movie` y “Serie” para `series`.
6. Reemplazar la etiqueta inline de `MediaCard` por `MediaTypeBadge`.
7. Conservar `map` y `media.id` como key dentro de `MediaGrid`.
8. Integrar las clases `.empty-state` y `.media-type-badge` provistas.
9. Ejecutar los casos de aceptación y `pnpm build`.

## Restricciones

- No usar `useState`, Effects, stores o almacenamiento local.
- No añadir inputs, botones o eventos.
- No instalar dependencias.
- No importar `mediaItems` desde `MediaGrid`.
- No mover la key dentro de `MediaCard`.
- No usar `children` en `EmptyState`.
- No cambiar `MediaItem` o el fixture para evitar un caso.
- No eliminar los fallbacks existentes.

## Casos de aceptación

El docente comprobará:

1. `mediaItems` muestra seis tarjetas.
2. `[]` muestra el título y la descripción del estado vacío.
3. Una película muestra “Película”.
4. Una serie muestra “Serie”.
5. Aftersun conserva “Poster no disponible”.
6. The Bear conserva “Sin descripción disponible”.
7. La consola no presenta warnings de key.
8. `pnpm build` termina con código de salida 0.
9. Puedes explicar quién posee `items`, `map`, key y la decisión vacía.

## Evidencias requeridas

- Captura del catálogo con seis medios.
- Captura del estado vacío.
- Árbol final escrito o dibujado.
- Resultado de `pnpm build`.
- Proyecto reproducible mediante ZIP o enlace admitido.
- Explicación breve del flujo de props.

Una captura demuestra lo observado en ese navegador. El build demuestra tipos y producción de archivos. Ninguna de estas evidencias prueba una API, despliegue o producción.

## Actividad opcional

Después de cumplir los requisitos base, muestra el total de medios con `items.length` cuando la colección no está vacía. El valor se calcula durante el render y no usa estado.

## Evaluación

| Tipo | Criterio o actividad | Qué se evalúa | Escala de asignación | Máximo | Obtenido |
| --- | --- | --- | --- | ---: | ---: |
| Base | Estado vacío | `EmptyState` recibe `title` y `description`; `MediaGrid` lo muestra con los textos aprobados cuando `items.length === 0`; no aparece `0`. | Completo: 25 · Parcial: 13 si el mensaje aparece pero el contrato, los textos o la condición no cumplen por completo · No demostrado: 0 | 25 | ___ |
| Base | Etiqueta de tipo | `MediaTypeBadge` recibe `mediaType: MediaType`, muestra los dos labels y sustituye la decisión inline de `MediaCard`. | Completo: 20 · Parcial: 10 si existe el componente pero un label, el contrato o la integración es incorrecto · No demostrado: 0 | 20 | ___ |
| Base | Composición y flujo | `App` elige la fuente; `MediaGrid` recibe `items`, contiene un solo `map` y coloca `media.id` como key en cada `MediaCard`; los componentes no importan datos que no poseen. | Completo: 20 · Parcial: 10 si el catálogo funciona pero duplica el recorrido, importa el fixture desde el grid o ubica mal una responsabilidad · No demostrado: 0 | 20 | ___ |
| Base | Regresión y restricciones | Funcionan colección completa, vacío, película, serie y los dos fallbacks; no se añaden estado, Effects, stores, eventos, dependencias o cambios al fixture. | Completo: 20 · Parcial: 10 si funcionan al menos cuatro casos y no se añade una herramienta fuera de alcance · No demostrado: 0 | 20 | ___ |
| Base | Verificación, entrega y explicación | `pnpm build` termina con código 0; se entregan las dos capturas, el árbol y el proyecto; el estudiante explica propiedad de `items`, decisión vacía y límite del build. | Completo: 15 · Parcial: 8 si el proyecto y parte de la evidencia pueden revisarse, pero falta una captura, el build o una parte de la explicación · No demostrado: 0 | 15 | ___ |
| Total | Total base | Suma de los cinco criterios obligatorios. | Suma de filas base | 100 | ___ |
| Extra | Total derivado | Con los requisitos base relacionados cumplidos, `MediaGrid` muestra `items.length` solo para una colección no vacía y no usa estado. | Cumple todas las condiciones: +5 · No cumple: 0 | +5 | ___ |
| Total | Total extra | Suma de actividades opcionales válidas. | Máximo adicional disponible | +5 | ___ |
| Total | Puntaje bruto | Total base más total extra. | Máximo antes del límite institucional | 105 | ___ |
| Registro | Nota en plataforma | Puntaje bruto limitado al máximo admitido. | `min(puntaje bruto, 100)` | 100 | ___ |

## Entrega

Entrega el proyecto, las capturas, el árbol y el resultado del build en la plataforma indicada. Excluye `node_modules/`, `dist/`, tokens, contraseñas y variables de entorno.

La actividad opcional se identifica por separado. No reemplaza un requisito obligatorio ni corrige una responsabilidad base incompleta.
