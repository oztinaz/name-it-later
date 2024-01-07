import { beforeEach, describe, expect, test, vi } from 'vitest'
import { SearchRequest } from '@/models/spotify/requests/api/SearchRequest'
import type { SpotifyArtist } from '@/types/spotify/Artist'

describe('models/spotify/requests/api/SearchRequest', () => {
  let mockObj: SearchRequest<SpotifyArtist>

  beforeEach(() => {
    mockObj = new SearchRequest<SpotifyArtist>('artist')
  })

  test('getUrlPath gets url path', async () => {
    expect(mockObj.getUrlPath()).toBe('/search')
  })

  test('getQuery gets query', async () => {
    expect(mockObj.getQuery()).toBe('')
  })

  test('setQuery gets query', async () => {
    const mockStr = 'mock str'
    mockObj.setQuery(mockStr)
    expect(mockObj.getQuery()).toBe(mockStr)
  })

  test('getType gets type', async () => {
    expect(mockObj.getType()).toBe('artist')
  })

  test('getRequestParams gets request params', async () => {
    const mockStr = 'mock str'

    vi.spyOn(mockObj, 'getQuery').mockReturnValueOnce(mockStr)
    vi.spyOn(mockObj, 'getType').mockReturnValueOnce(mockStr)

    expect(mockObj.getRequestParams()).toStrictEqual({
      q: mockStr,
      type: mockStr
    })
  })
})
