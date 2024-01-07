import { defineStore } from 'pinia'
import { ref } from 'vue'
import { SpotifyAccessTokenRequest } from '@/models/spotify/requests/token/AccessTokenRequest'
import { SpotifyRefreshTokenRequest } from '@/models/spotify/requests/token/RefreshTokenRequest'
import type { SpotifyAccessToken, SpotifyRefreshToken } from '@/types/spotify/Token'

export const useSpotifyTokenStore = defineStore('spotify-token', () => {
  const accessTokenRequest = ref(new SpotifyAccessTokenRequest())
  const refreshTokenRequest = ref(new SpotifyRefreshTokenRequest())

  const fetchAccessToken = async (code: string): Promise<SpotifyAccessToken> => {
    return await accessTokenRequest.value.fetchToken(code)
  }

  const fetchRefreshToken = async (refreshToken: string): Promise<SpotifyRefreshToken> => {
    return await refreshTokenRequest.value.fetchToken(refreshToken)
  }

  return {
    fetchAccessToken,
    fetchRefreshToken
  }
})
