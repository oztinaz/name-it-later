<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSpotifyAuthorizationStore } from '@/stores/spotify/authorization'

const spotifyAuthorizationStore = useSpotifyAuthorizationStore()
const { authorizationUrl } = storeToRefs(spotifyAuthorizationStore)
</script>

<template>
  <div id="ask-authorization-view">
    <a :href="authorizationUrl" data-test="authorize-anchor"> Authorize </a>
  </div>
</template>

<style scoped></style>
