<script setup lang="ts">
import Seed from '@/components/spotify/seed/Seed.vue';
import { SearchRequest } from '@/models/spotify/requests/api/SearchRequest';
import { useSpotifySearchStore } from '@/stores/spotify/search';
import type { SpotifyArtist } from '@/types/spotify/Artist';
import type { SpotifySearchItem } from '@/types/spotify/responses/SearchItem';

const spotifySearchStore = useSpotifySearchStore()
const { search } = spotifySearchStore

const type = 'artist'
const request = new SearchRequest<SpotifyArtist>(type)

const mapper = (artists: SpotifyArtist[]) => {
  return artists.map((artist: SpotifyArtist) => {
    return {
      id: artist.id,
      description: makeDescription(artist),
      imageUrl: getImageUrl(artist),
      title: artist.name
    }
  })
}

const retriever = async (request: SearchRequest<SpotifyArtist>): Promise<SpotifyArtist[]> => {
  const response: SpotifySearchItem<SpotifyArtist> = await search<SpotifyArtist>(request)
  if (response.artists) {
    return response.artists.items
  }
  return []
}

const getImageUrl = (artist: SpotifyArtist): string => {
  return artist.images[0] ? artist.images[0].url : ''
}

const makeDescription = (artist: SpotifyArtist): string => {
  return `Genres: ${artist.genres.join(', ')}`
}
</script>

<template>
  <div id="spotify-create-playlist-seeds-artists-view">
    <Seed :type="type" :mapper="mapper" :retriever="retriever" :request="request"/>
  </div>
</template>

<style scoped></style>
