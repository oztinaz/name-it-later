import { describe, expect, test, vi } from "vitest";
import { SpotifyAccessTokenRequest } from "@/models/spotify/requests/token/AccessTokenRequest";

describe('models/spotify/requests/token/AbstractTokenRequest', () => {
  const mockStr: string = 'mock string'
  import.meta.env.VITE_SPOTIFY_REDIRECT_URI = mockStr

  const mockObj: SpotifyAccessTokenRequest = new SpotifyAccessTokenRequest()

  test('getRequestBody gets request body', () => {
    const mockPayload: string = mockStr
    vi.spyOn(mockObj, 'getGrantType').mockReturnValueOnce(mockStr)
    vi.spyOn(mockObj, 'getRedirectUri').mockReturnValueOnce(mockStr)

    expect(mockObj.getRequestBody(mockPayload)).toStrictEqual({
      code: mockPayload,
      grant_type: mockStr,
      redirect_uri: mockStr
    })
  })

  test('getGrantType gets grant type', () => {
    expect(mockObj.getGrantType()).toBe('authorization_code')
  })

  test('getRedirectUri gets redirect uri', () => {
    expect(mockObj.getRedirectUri()).toBe(mockStr)
  })
})