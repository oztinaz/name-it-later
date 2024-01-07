import { beforeEach, describe, expect, test, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSpotifySearchStore } from '@/stores/spotify/search'
import { SearchRequest } from '@/models/spotify/requests/api/SearchRequest'
import type { SpotifySearchItem } from '@/types/spotify/SearchItem'
import type { SpotifyArtist } from '@/types/spotify/Artist'

describe('stores/spotify/search', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const mockSearchItem: SpotifySearchItem<SpotifyArtist> = {
    artists: {
      href: '',
      limit: 0,
      next: '',
      offset: 0,
      previous: '',
      total: 0,
      items: []
    }
  }

  test('search uses SearchRequest get and getRequestParams methods', async () => {
    const spyGet = vi.spyOn(SearchRequest.prototype, 'get').mockResolvedValueOnce(mockSearchItem)
    const spyParams = vi.spyOn(SearchRequest.prototype, 'getRequestParams').mockReturnValueOnce({})

    const store = useSpotifySearchStore()

    const request = new SearchRequest<SpotifyArtist>('artist')
    const response = await store.search(request)

    expect(response).toStrictEqual(mockSearchItem)
    expect(spyGet).toHaveBeenCalledOnce()
    expect(spyGet).toHaveBeenCalledWith({})
    expect(spyParams).toHaveBeenCalledOnce()
  })
})
