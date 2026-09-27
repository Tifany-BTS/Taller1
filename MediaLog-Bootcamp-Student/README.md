# MediaLog Bootcamp

Paquete `medialog-bootcamp`. Node >=22.22.0 y pnpm 11.17.0.

## Sesión 03 · S03-B04 · Entrada al taller

MediaGrid recibe items y conserva wrapper, map y key. App elige el fixture. Seis tarjetas funcionan; [] deja el área vacía sin mensaje. No contiene EmptyState, MediaTypeBadge ni el reto extra.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

En otra terminal: `pnpm build` y `pnpm lint`.

[Guía estudiantil](course/03-taller-catalogo-estatico/student-guide.md), [lectura previa](course/03-taller-catalogo-estatico/pre-class-reading.md) y [rúbrica](course/03-taller-catalogo-estatico/workshop-rubric.md).

Guarda tu trabajo antes de consultar otra rama. Presentación continua → coding → descanso → taller → revisión oral. Siguiente paso: taller estudiantil de estado vacío y badge.

EXplicacion en texto:
--- ÁRBOL ---
App
└── AppHeader
└──  EmptyState (si no hay datos)
    ├── MediaCard (key={media.id})
    └── MediaGrid (valida items.length === 0)
        └── MediaTypeBadge (muestra Película/Serie)

Explicación breve del flujo de props.
App provee la lista de datos a MediaGrid mediante la prop items. MediaGrid decide si mostrar el estado vacío o recorrer la lista para renderizar las tarjetas. MediaCard diseña la tarjeta individual con sus datos, y le entrega el tipo a MediaTypeBadge, que se encarga de mostrar la etiqueta de 'Película' o 'Serie'.
Y EmptyState:
MediaGrid evalúa la prop items. Si la lista está vacía, no recorre las tarjetas y renderiza directamente a EmptyState mostrado el mensaje de "Catálogo vacío".