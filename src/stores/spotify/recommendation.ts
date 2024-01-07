import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { GetRecommendationsRequest } from '@/models/spotify/requests/api/GetRecommendationsRequest'
import type { SpotifyRecommendation } from '@/types/spotify/Recommendation'
import type { SpotifyTrack } from '@/types/spotify/Track'

export const useSpotifyRecommendationStore = defineStore('spotify-recommendation', () => {
  const recommendationRequest = ref(new GetRecommendationsRequest())

  const recommendedTracks: Ref<SpotifyTrack[]> = ref([])

  const fetchRecommendation = async (recommendationRequest: GetRecommendationsRequest): Promise<SpotifyRecommendation> => {
    return await recommendationRequest.get(recommendationRequest.getRequestParams())
  }

  const setRecommendedTracks = (tracks: SpotifyTrack[]): void => {
    recommendedTracks.value = tracks
  }

  return {
    recommendationRequest,
    recommendedTracks,
    fetchRecommendation,
    setRecommendedTracks
  }
})
