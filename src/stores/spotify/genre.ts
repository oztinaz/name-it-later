import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { GetGenresRequest } from '@/models/spotify/requests/api/GetGenresRequest'
import type { SpotifyGenre } from '@/types/spotify/Genre'
import type { SpotifyGetGenreResponse } from '@/types/spotify/responses/GetGenresResponse'

export const useSpotifyGenreStore = defineStore('spotify-genre', () => {
  const request = ref(new GetGenresRequest())

  const genres: Ref<SpotifyGenre[]> = ref([])

  const fetchGenres = async (): Promise<SpotifyGetGenreResponse> => {
    return await request.value.get()
  }

  const setGenres = (g: SpotifyGenre[]): void => {
    genres.value = g
  }

  return {
    genres,
    fetchGenres,
    setGenres
  }
})
