import type { MediaItem } from '../types/media-item'
import { MediaCard } from './media-card'
import { EmptyState } from './empty-state'
type MediaGridProps = {
  items: MediaItem[]
}

export function MediaGrid(props: MediaGridProps) {
  const { items } = props

  // Si no hay elementos, se mostrara el EmptyState.
  if (items.length === 0) {
    return (
      <EmptyState
        title="Catálogo vacío"
        description="No hay películas o series disponibles"
      />
    )
  }

  // 2. Si hay elementos, se muestra el total y la lista de tarjetas.
  return (
    <div>
      {/* Mostrar total de medios */}
      <p className="media-count">Total de medios: {items.length}</p>

      <div className="media-list">
        {items.map((media) => (
          <MediaCard key={media.id} data={media} />
        ))}
      </div>
    </div>
  )
}