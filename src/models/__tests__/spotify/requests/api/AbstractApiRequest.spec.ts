import { describe, expect, test, vi } from 'vitest'
import { AbstractSpotifyApiRequest } from '@/models/spotify/requests/api/AbstractApiRequest'
import { CookieUtils } from '@/utils/Cookie'

describe('models/spotify/requests/api/AbstractApiRequest', () => {
  const mockStr: string = 'mock string'

  import.meta.env.VITE_SPOTIFY_API_URL = mockStr

  class TestApiRequest extends AbstractSpotifyApiRequest<string> {}

  const mockObj: TestApiRequest = new TestApiRequest()

  test('getRequestHeaders gets request headers', () => {
    vi.spyOn(mockObj, 'getTokenType').mockReturnValueOnce(mockStr)
    const spyGet = vi.spyOn(CookieUtils, 'get').mockReturnValueOnce(mockStr)

    const result: any = mockObj.getRequestHeaders()

    expect(result).toStrictEqual({
      Authorization: `${mockStr} ${mockStr}`
    })
    expect(spyGet).toHaveBeenCalledOnce()
    expect(spyGet).toHaveBeenCalledWith('X-SPOTIFY-ACCESS-TOKEN')
  })

  test('getTokenType gets tokenType', () => {
    expect(mockObj.getTokenType()).toBe('Bearer')
  })

  test('getUrl gets url', () => {
    expect(mockObj.getUrl()).toBe(mockStr)
  })
})
