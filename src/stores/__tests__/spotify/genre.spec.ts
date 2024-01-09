import { beforeEach, describe, test, vi, expect } from 'vitest'
import { setActivePinia, createPinia, storeToRefs } from 'pinia'
import { useSpotifyGenreStore } from '@/stores/spotify/genre'

import { GetGenresRequest } from '@/models/spotify/requests/api/GetGenresRequest'
import type { SpotifyGenre } from '@/types/spotify/Genre'

describe('stores/spotify/genre', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const mockGenres: SpotifyGenre[] = []

  test('fetchGenres uses GetGenresRequest.get method', async () => {
    const spotifyGenreStore = useSpotifyGenreStore()
    const { fetchGenres } = spotifyGenreStore

    const spyGet = vi
      .spyOn(GetGenresRequest.prototype, 'get')
      .mockResolvedValueOnce({
        genres: mockGenres
      })

    const response = await fetchGenres()

    expect(response).toStrictEqual({
      genres: mockGenres
    })
    expect(spyGet).toHaveBeenCalledOnce()
  })

  test('setGenres sets genres', async () => {
    const spotifyGenreStore = useSpotifyGenreStore()
    const { setGenres } = spotifyGenreStore
    const { genres } = storeToRefs(spotifyGenreStore)

    setGenres(mockGenres)

    expect(genres.value).toStrictEqual(mockGenres)
  })
})
