import type { SpotifyImage } from "@/types/spotify/Image"

export type SpotifyUser = {
  display_name: string,
  external_urls: {
    spotify: string
  },
  followers: {
    href: string,
    total: number
  },
  href: string,
  id: string,
  images: SpotifyImage[],
  type: 'user',
  uri: string
}