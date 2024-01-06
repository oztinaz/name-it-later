import { describe, expect, test, vi } from "vitest";
import { SpotifyRefreshTokenRequest } from "@/models/spotify/requests/token/RefreshTokenRequest";

describe('models/spotify/requests/token/AbstractTokenRequest', () => {
  const mockStr: string = 'mock string'

  const mockObj: SpotifyRefreshTokenRequest = new SpotifyRefreshTokenRequest()

  test('getRequestBody gets request body', () => {
    const mockPayload: string = mockStr
    vi.spyOn(mockObj, 'getGrantType').mockReturnValueOnce(mockStr)

    expect(mockObj.getRequestBody(mockPayload)).toStrictEqual({
      refresh_token: mockPayload,
      grant_type: mockStr
    })
  })

  test('getGrantType gets grant type', () => {
    expect(mockObj.getGrantType()).toBe('refresh_token')
  })
})