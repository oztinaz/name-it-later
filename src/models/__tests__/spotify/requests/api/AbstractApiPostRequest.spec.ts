import { describe, expect, test, vi } from 'vitest'
import { AbstractSpotifyPostGetRequest } from '@/models/spotify/requests/api/AbstractApiPostRequest'
import { AxiosUtils } from '@/utils/Axios'

describe('models/spotify/requests/api/AbstractApiPostRequest', () => {
  const mockStr: string = 'mock string'

  import.meta.env.VITE_SPOTIFY_API_URL = mockStr

  class TestApiGetRequest extends AbstractSpotifyPostGetRequest<string> {}

  const mockObj: TestApiGetRequest = new TestApiGetRequest()

  test('get uses AxiosUtils.get method', async () => {
    vi.spyOn(mockObj, 'getUrl').mockReturnValueOnce(mockStr)
    vi.spyOn(mockObj, 'getRequestHeaders').mockReturnValueOnce({})
    const spyGet = vi.spyOn(AxiosUtils, 'post').mockResolvedValueOnce(mockStr)

    const response: any = await mockObj.post()
    expect(spyGet).toHaveBeenCalledOnce()
    expect(spyGet).toHaveBeenCalledWith(mockStr, {}, {}, null)
    expect(response).toBe(mockStr)
  })
})
