import type { SpotifyBasicAlbum } from "@/types/spotify/Album"
import type { SpotifyArtist } from "@/types/spotify/Artist"
import type { SpotifyTrack } from "@/types/spotify/Track"

export type SpotifySearchItem<T extends SpotifyBasicAlbum | SpotifyArtist | SpotifyTrack> = {
  tracks?: {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: T
  },
  artists?: {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: T[]
  },
  albums?: {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: T[]
  }
}