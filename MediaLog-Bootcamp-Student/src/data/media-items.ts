import type { MediaItem } from '../types/media-item'

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: 'Arrival',
    description:
      'Una lingüista intenta comunicarse con visitantes extraterrestres.',
    mediaType: 'movie',
    releaseDate: '2016-11-11',
    posterUrl: '/posters/arrival.svg',
  },
  {
    id: 2,
    title: 'Severance',
    description:
      'Un grupo de empleados separa sus recuerdos laborales y personales.',
    mediaType: 'series',
    releaseDate: '2022-02-18',
    posterUrl: '/posters/severance.svg',
  },
  {
    id: 3,
    title: 'Aftersun',
    description:
      'Una hija reconstruye los recuerdos de unas vacaciones con su padre.',
    mediaType: 'movie',
    releaseDate: '2022-10-21',
    posterUrl: null,
  },
  {
    id: 4,
    title: 'The Bear',
    description: null,
    mediaType: 'series',
    releaseDate: '2022-06-23',
    posterUrl: '/posters/the-bear.svg',
  },
  {
    id: 5,
    title: 'Past Lives',
    description:
      'Dos amigos de la infancia se reencuentran años después en Nueva York.',
    mediaType: 'movie',
    releaseDate: '2023-06-02',
    posterUrl: '/posters/past-lives.svg',
  },
  {
    id: 6,
    title: 'Blue Eye Samurai',
    description:
      'Una guerrera persigue una venganza en el Japón del periodo Edo.',
    mediaType: 'series',
    releaseDate: '2023-11-03',
    posterUrl:
      '/posters/blue-eye-samurai.svg',
  },
]
