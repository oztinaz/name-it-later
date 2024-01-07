import type { SpotifyBasicAlbum } from "@/types/spotify/Album"
import type { SpotifyArtist } from "@/types/spotify/Artist"
import type { SpotifyAvailableMarket } from "@/types/spotify/AvailableMarket"

export type SpotifyTrack = {
  album: SpotifyBasicAlbum,
  artists: SpotifyArtist[],
  available_markets: SpotifyAvailableMarket,
  disc_number: number,
  duration_ms: number,
  explicit: boolean,
  external_ids: {
    isrc: string,
    ean: string,
    upc: string
  },
  external_urls: {
    spotify: string
  },
  href: string,
  id: string,
  is_playable: boolean,
  linked_from: object,
  restrictions: {
    reason: string
  },
  name: string,
  popularity: number,
  preview_url: string,
  track_number: number,
  type: 'track',
  uri: string,
  is_local: boolean
}