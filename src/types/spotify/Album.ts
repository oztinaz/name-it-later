import type { SpotifyBasicArtist } from "@/types/spotify/Artist"
import type { SpotifyAvailableMarket } from "@/types/spotify/AvailableMarket"
import type { SpotifyCopyright } from "@/types/spotify/Copyright"
import type { SpotifyGenre } from "@/types/spotify/Genre"
import type { SpotifyImage } from "@/types/spotify/Image"

export type SpotifyAlbum = SpotifyBasicAlbum & {
  tracks: {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: [
      {
        artists: SpotifyBasicArtist[],
        available_markets: SpotifyAvailableMarket[],
        disc_number: number,
        duration_ms: number,
        explicit: boolean,
        external_urls: {
          spotify: string
        },
        href: string,
        id: string,
        is_playable: boolean,
        linked_from: {
          external_urls: {
            spotify: string
          },
          href: string,
          id: string,
          type: string,
          uri: string
        },
        restrictions: {
          reason: string
        },
        name: string,
        preview_url: string,
        track_number: number,
        type: string,
        uri: string,
        is_local: boolean
      }
    ]
  },
  copyrights: SpotifyCopyright[],
  external_ids: {
    isrc: string,
    ean: string,
    upc: string
  },
  genres: SpotifyGenre[],
  label: string,
  popularity: number
}

export type SpotifyBasicAlbum = {
  album_type: 'album' | 'compilation' | 'single',
  total_tracks: number,
  available_markets: SpotifyAvailableMarket[],
  external_urls: {
    spotify: string
  },
  href: string,
  id: string,
  images: SpotifyImage[],
  name: string,
  release_date: string,
  release_date_precision: 'day' | 'month' | 'year',
  restrictions: {
    reason: 'explicit' | 'market' | 'product'
  },
  type: 'album',
  uri: string,
  artists: SpotifyBasicArtist[],
}