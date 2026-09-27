import type { MediaType } from '../types/media-item'

type MediaTypeBadgeProps = {
  mediaType: MediaType
}

export function MediaTypeBadge({ mediaType }: MediaTypeBadgeProps) {
const label = mediaType === 'movie' ? 'Película' : 'Serie'

  return <span className="media-type-badge">{label}</span>
}