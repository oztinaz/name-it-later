import { beforeEach, describe, test, vi, expect } from 'vitest'
import { setActivePinia, createPinia, storeToRefs } from 'pinia'
import { useSpotifyTokenStore } from '@/stores/spotify/token'

import { SpotifyAccessTokenRequest } from '@/models/spotify/requests/token/AccessTokenRequest'
import { SpotifyRefreshTokenRequest } from '@/models/spotify/requests/token/RefreshTokenRequest'
import type { SpotifyAccessToken, SpotifyRefreshToken } from '@/types/spotify/Token'

describe('stores/spotify/token', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const mockStr: string = 'mock str'
  const mockSpotifyAccessToken: SpotifyAccessToken = {
    access_token: mockStr,
    token_type: mockStr,
    expires_in: 0,
    scope: mockStr,
    refresh_token: mockStr
  }
  const mockSpotifyRefreshToken: SpotifyRefreshToken = {
    access_token: mockStr,
    token_type: mockStr,
    expires_in: 0,
    scope: mockStr
  }

  test('fetchAccessToken uses SpotifyAccessTokenRequest.fetchToken method', async () => {
    const spotifyTokenStore = useSpotifyTokenStore()
    const { fetchAccessToken } = spotifyTokenStore

    const spyFetchToken = vi.spyOn(SpotifyAccessTokenRequest.prototype, 'fetchToken').mockResolvedValueOnce(mockSpotifyAccessToken)

    const response = await fetchAccessToken(mockStr)

    expect(response).toStrictEqual(mockSpotifyAccessToken)
    expect(spyFetchToken).toHaveBeenCalledOnce()
  })

  test('fetchRefreshToken uses SpotifyRefreshTokenRequest.fetchToken method', async () => {
    const spotifyTokenStore = useSpotifyTokenStore()
    const { fetchRefreshToken } = spotifyTokenStore

    const spyFetchToken = vi.spyOn(SpotifyRefreshTokenRequest.prototype, 'fetchToken').mockResolvedValueOnce(mockSpotifyRefreshToken)

    const response = await fetchRefreshToken(mockStr)

    expect(response).toStrictEqual(mockSpotifyRefreshToken)
    expect(spyFetchToken).toHaveBeenCalledOnce()
  })
})