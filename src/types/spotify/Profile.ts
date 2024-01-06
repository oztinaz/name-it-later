import type { SpotifyUser } from '@/types/spotify/User'

export type SpotifyProfile = SpotifyUser & {
  country: string
  email: string
  explicit_content: {
    filter_enabled: boolean
    filter_locked: boolean
  }
  product: string
}
