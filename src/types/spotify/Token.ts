export type SpotifyToken = {
  access_token: string
  token_type: string
  scope: string
  expires_in: number
}

export type SpotifyAccessToken = SpotifyToken & {
  refresh_token: string
}

export type SpotifyRefreshToken = SpotifyToken
