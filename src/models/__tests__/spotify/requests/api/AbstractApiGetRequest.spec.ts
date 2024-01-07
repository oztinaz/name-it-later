import { describe, expect, test, vi } from 'vitest'
import { AbstractSpotifyApiGetRequest } from '@/models/spotify/requests/api/AbstractApiGetRequest'
import { AxiosUtils } from '@/utils/Axios'

describe('models/spotify/requests/api/AbstractApiGetRequest', () => {
  const mockStr: string = 'mock string'

  import.meta.env.VITE_SPOTIFY_API_URL = mockStr

  class TestApiGetRequest extends AbstractSpotifyApiGetRequest<string> {
    public getUrlPath(): string {
      throw new Error('Method not implemented.')
    }
  }

  const mockObj: TestApiGetRequest = new TestApiGetRequest()

  test('get uses AxiosUtils.get method', async () => {
    vi.spyOn(mockObj, 'getUrl').mockReturnValueOnce(mockStr)
    vi.spyOn(mockObj, 'getRequestHeaders').mockReturnValueOnce({})
    const spyGet = vi.spyOn(AxiosUtils, 'get').mockResolvedValueOnce(mockStr)

    const response: any = await mockObj.get()
    expect(spyGet).toHaveBeenCalledOnce()
    expect(spyGet).toHaveBeenCalledWith(mockStr, {}, {})
    expect(response).toBe(mockStr)
  })
})
