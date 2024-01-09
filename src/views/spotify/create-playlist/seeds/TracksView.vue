<script setup lang="ts">
import Seed from '@/components/spotify/seed/Seed.vue';
import { SearchRequest } from '@/models/spotify/requests/api/SearchRequest';
import { useSpotifySearchStore } from '@/stores/spotify/search';
import type { SpotifyBasicArtist } from '@/types/spotify/Artist';
import type { SpotifySearchItem } from '@/types/spotify/responses/SearchItem';
import type { SpotifyTrack } from '@/types/spotify/Track';

const spotifySearchStore = useSpotifySearchStore()
const { search } = spotifySearchStore

const type = 'track'
const request = new SearchRequest<SpotifyTrack>(type)

const mapper = (tracks: SpotifyTrack[]) => {
  return tracks.map((track: SpotifyTrack) => {
    return {
      id: track.id,
      description: makeDescription(track),
      imageUrl: getImageUrl(track),
      title: track.name
    }
  })
}

const retriever = async (request: SearchRequest<SpotifyTrack>): Promise<SpotifyTrack[]> => {
  const response: SpotifySearchItem<SpotifyTrack> = await search<SpotifyTrack>(request)
  if (response.tracks) {
    return response.tracks.items
  }
  return []
}

const getImageUrl = (track: SpotifyTrack): string => {
  return track.album.images[0] ? track.album.images[0].url : ''
}

const makeDescription = (track: SpotifyTrack): string => {
  return `by ${track.album.artists.map((artist: SpotifyBasicArtist) => artist.name).join(', ')}`
}
</script>

<template>
  <div id="spotify-create-playlist-seeds-tracks-view">
    <Seed :type="type" :mapper="mapper" :retriever="retriever" :request="request"/>
  </div>
</template>

<style scoped></style>
