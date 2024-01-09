import { defineStore } from 'pinia'
import { SearchRequest } from '@/models/spotify/requests/api/SearchRequest'
import type { SpotifySearchItem } from '@/types/spotify/responses/SearchItem'
import type { SpotifyTrack } from '@/types/spotify/Track'
import type { SpotifyBasicAlbum } from '@/types/spotify/Album'
import type { SpotifyArtist } from '@/types/spotify/Artist'

export const useSpotifySearchStore = defineStore('spotify-search', () => {
  const search = async <T extends SpotifyBasicAlbum | SpotifyArtist | SpotifyTrack>(searchRequest: SearchRequest<T>): Promise<SpotifySearchItem<T>> => {
    return await searchRequest.get(searchRequest.getRequestParams())
  }

  return {
    search
  }
})
