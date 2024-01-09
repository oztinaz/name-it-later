<script setup lang="ts">
import Seed from '@/components/spotify/seed/Seed.vue';
import { GetGenresRequest } from '@/models/spotify/requests/api/GetGenresRequest';
import { useSpotifyGenreStore } from '@/stores/spotify/genre';
import type { SpotifyGenre } from '@/types/spotify/Genre';
import type { SpotifyGetGenreResponse } from '@/types/spotify/responses/GetGenresResponse';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const spotifyGenreStore = useSpotifyGenreStore()
const { genres } = storeToRefs(spotifyGenreStore)
const { fetchGenres, setGenres } = spotifyGenreStore

const type = 'genre'

const mapper = (genres: SpotifyGenre[]) => {
  return genres.map((genre: SpotifyGenre) => {
    return {
      id: genre,
      description: makeDescription(genre),
      imageUrl: getImageUrl(genre),
      title: genre
    }
  })
}

const retriever = (): SpotifyGenre[] => {
  return genres.value.filter((genre: SpotifyGenre) => genre.toLocaleLowerCase().includes(genre.toLocaleLowerCase()))
}

const getImageUrl = (genre: SpotifyGenre): string => {
  return ''
}

const makeDescription = (genre: SpotifyGenre): string => {
  return ''
}

onMounted(async () => {
  const response: SpotifyGetGenreResponse = await fetchGenres()
  setGenres(response.genres)
})
</script>

<template>
  <div id="spotify-create-playlist-seeds-genres-view">
    <Seed :type="type" :mapper="mapper" :retriever="retriever"/>
  </div>
</template>

<style scoped></style>
