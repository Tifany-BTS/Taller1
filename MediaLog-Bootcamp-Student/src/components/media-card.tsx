import type { MediaItem } from '../types/media-item'

type MediaCardProps = {
  data: MediaItem
}

export function MediaCard(props: MediaCardProps) {
  const { data } = props
  const mediaTypeLabel = data.mediaType === 'movie' ? 'Película' : 'Serie'

  return (
    <article className="media-card">
      {data.posterUrl ? (
        <img
          className="media-card__poster-image"
          src={data.posterUrl}
          alt={`Poster de ${data.title}`}
        />
      ) : (
        <div className="media-card__poster">Poster no disponible</div>
      )}

      <div>
        <p className="media-card__meta">
          {mediaTypeLabel} · {data.releaseDate}
        </p>
        <h3>{data.title}</h3>
        <p>{data.description ?? 'Sin descripción disponible'}</p>
      </div>
    </article>
  )
}
