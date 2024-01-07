import { beforeEach, describe, expect, test, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSpotifyRecommendationStore } from '@/stores/spotify/recommendation'
import { GetRecommendationsRequest } from '@/models/spotify/requests/api/GetRecommendationsRequest'
import type { SpotifyRecommendation } from '@/types/spotify/Recommendation'

describe('stores/spotify/recommendation', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const mockRecommendation: SpotifyRecommendation = {
    seeds: [],
    tracks: []
  }

  test('fetchRecommendation uses GetRecommendationsRequest get and getRequestParams methods', async () => {
    const spyGet = vi.spyOn(GetRecommendationsRequest.prototype, 'get').mockResolvedValueOnce(mockRecommendation)
    const spyParams = vi.spyOn(GetRecommendationsRequest.prototype, 'getRequestParams').mockReturnValueOnce({})

    const store = useSpotifyRecommendationStore()

    const request = new GetRecommendationsRequest()
    const response = await store.fetchRecommendation(request)

    expect(response).toStrictEqual(mockRecommendation)
    expect(spyGet).toHaveBeenCalledOnce()
    expect(spyGet).toHaveBeenCalledWith({})
    expect(spyParams).toHaveBeenCalledOnce()
  })

  test('setRecommendedTracks sets recommendedTracks', () => {
    const store = useSpotifyRecommendationStore()
    store.setRecommendedTracks(mockRecommendation.tracks)
    expect(store.recommendedTracks).toStrictEqual(mockRecommendation.tracks)
  })
})
