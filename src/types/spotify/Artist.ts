import type { SpotifyGenre } from "@/types/spotify/Genre"
import type { SpotifyImage } from "@/types/spotify/Image"

export type SpotifyArtist = SpotifyBasicArtist & {
  followers: {
    href: string,
    total: number
  },
  genres: SpotifyGenre[],
  images: SpotifyImage[],
  popularity: number,
}

export type SpotifyBasicArtist = {
  external_urls: {
    spotify: string
  },
  href: string,
  id: string,
  name: string,
  type: 'artist',
  uri: string
}