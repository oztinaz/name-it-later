import { describe, expect, test, vi } from 'vitest'
import { AbstractSpotifyApiRequest } from '@/models/spotify/requests/api/AbstractApiRequest'
import { CookieUtils } from '@/utils/Cookie'
import { AxiosUtils } from '@/utils/Axios'

describe('models/spotify/requests/api/AbstractApiRequest', () => {
  const mockStr: string = 'mock string'

  import.meta.env.VITE_SPOTIFY_API_URL = mockStr

  class TestApiRequest extends AbstractSpotifyApiRequest<string> {}

  const mockObj: TestApiRequest = new TestApiRequest()

  test('get uses AxiosUtils.get method', async () => {
    vi.spyOn(mockObj, 'getUrl').mockReturnValueOnce(mockStr)
    vi.spyOn(mockObj, 'getRequestHeaders').mockReturnValueOnce({})
    const spyGet = vi.spyOn(AxiosUtils, 'get').mockResolvedValueOnce(mockStr)

    const response: any = await mockObj.get()
    expect(spyGet).toHaveBeenCalledOnce()
    expect(spyGet).toHaveBeenCalledWith(mockStr, {}, {})
    expect(response).toBe(mockStr)
  })

  test('post uses AxiosUtils.post method', async () => {
    vi.spyOn(mockObj, 'getUrl').mockReturnValueOnce(mockStr)
    vi.spyOn(mockObj, 'getRequestHeaders').mockReturnValueOnce({})
    const spyPost = vi.spyOn(AxiosUtils, 'post').mockResolvedValueOnce(mockStr)

    const response: any = await mockObj.post()
    expect(spyPost).toHaveBeenCalledOnce()
    expect(spyPost).toHaveBeenCalledWith(mockStr, {}, {}, null)
    expect(response).toBe(mockStr)
  })

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
