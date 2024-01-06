import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { SpotifyAccessTokenRequest } from '@/models/spotify/requests/token/AccessTokenRequest'
import { SpotifyRefreshTokenRequest } from '@/models/spotify/requests/token/RefreshTokenRequest'
import type { SpotifyAccessToken, SpotifyRefreshToken } from '@/types/spotify/Token'

export const useSpotifyTokenStore = defineStore('spotify-token', () => {
  const accessTokenRequestModel = ref(new SpotifyAccessTokenRequest())
  const refreshTokenRequestModel = ref(new SpotifyRefreshTokenRequest())
  
  const fetchAccessToken = async (code: string): Promise<SpotifyAccessToken> => {
    return await accessTokenRequestModel.value.fetchToken(code)
  }
  
  const fetchRefreshToken = async (refreshToken: string): Promise<SpotifyRefreshToken> => {
    return await refreshTokenRequestModel.value.fetchToken(refreshToken)
  }

  return {
    fetchAccessToken,
    fetchRefreshToken
  }
})
