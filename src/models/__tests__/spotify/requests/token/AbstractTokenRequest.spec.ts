import { describe, expect, test, vi } from "vitest";
import { AbstractSpotifyTokenRequest } from "@/models/spotify/requests/token/AbstractTokenRequest";
import { AxiosUtils } from "@/utils/Axios";
import { Buffer } from 'buffer'
import type { SpotifyToken } from "@/types/spotify/Token";

describe('models/spotify/requests/token/AbstractTokenRequest', () => {
  const mockStr: string = 'mock string'

  import.meta.env.VITE_SPOTIFY_CLIENT_ID = mockStr
  import.meta.env.VITE_SPOTIFY_CLIENT_SECRET = mockStr
  import.meta.env.VITE_SPOTIFY_ACCOUNTS_URL = mockStr

  const mockRequestBody: object = {
    a: 'b'
  }

  class TestTokenRequest extends AbstractSpotifyTokenRequest<SpotifyToken> {
    public getRequestBody(payload: string): object {
      return mockRequestBody
    }
  
    public getGrantType(): string {
      return mockStr
    }
  }

  const mockObj: AbstractSpotifyTokenRequest<SpotifyToken> = new TestTokenRequest()

  test('fetchToken uses AxiosUtils.post method', async () => {
    vi.spyOn(mockObj, 'getRequestBody').mockReturnValueOnce({})
    vi.spyOn(mockObj, 'getRequestHeaders').mockReturnValueOnce({})
    vi.spyOn(mockObj, 'getUrl').mockReturnValueOnce(mockStr)
    const spyAxiosUtilsPost = vi.spyOn(AxiosUtils, 'post').mockResolvedValueOnce(null)

    const response: any = await mockObj.fetchToken(mockStr)

    expect(response).toBe(null)
    expect(spyAxiosUtilsPost).toHaveBeenCalledOnce()
    expect(spyAxiosUtilsPost).toHaveBeenCalledWith(mockStr, {}, {}, {})
  })

  test('getRequestHeaders gets request headers', () => {
    vi.spyOn(mockObj, 'createBase64Component').mockReturnValueOnce(mockStr)
    expect(mockObj.getRequestHeaders()).toStrictEqual({
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${mockStr}`
    })
  })

  test('getUrl gets url', () => {
    expect(mockObj.getUrl()).toBe(`${mockStr}/api/token`)
  })


  test('getClientId gets client id', () => {
    expect(mockObj.getClientId()).toBe(mockStr)
  })

  test('getClientSecret gets client secret', () => {
    expect(mockObj.getClientSecret()).toBe(mockStr)
  })


  test('getGrantType gets grant type', () => {
    expect(mockObj.getGrantType()).toBe(mockStr)
  })

  test('getContentType gets content type', () => {
    expect(mockObj.getContentType()).toBe('application/x-www-form-urlencoded')
  })

  test('createBase64Component create base64 encoded string from clientId and clientSecret', () => {
    const spyBufferFrom = vi.spyOn(Buffer, 'from')

    const result: any = mockObj.createBase64Component()

    expect(spyBufferFrom).toHaveBeenCalledOnce()
    expect(spyBufferFrom).toHaveBeenCalledWith(`${mockObj.getClientId()}:${mockObj.getClientSecret()}`)
  
    expect(result).toBe(Buffer.from(`${mockObj.getClientId()}:${mockObj.getClientSecret()}`).toString('base64'))
  })

  test('getRequestBody gets request body', () => {
    const mockPayload: string = ''
    expect(mockObj.getRequestBody(mockPayload)).toStrictEqual(mockRequestBody)
  })

  test('getGrantType gets grant type', () => {
    expect(mockObj.getGrantType()).toBe(mockStr)
  })
})