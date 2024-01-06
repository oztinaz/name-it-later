<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useSpotifyProfileStore } from '@/stores/spotify/profile'
import type { Profile } from '@/types/spotify/Profile'

const spotifyProfileStore = useSpotifyProfileStore()
const { fetchCurrentUsersProfile, setCurrentUserProfile } = spotifyProfileStore

onMounted(async () => {
  const profile: Profile = await fetchCurrentUsersProfile()
  setCurrentUserProfile(profile)
})
</script>

<template>
  <div id="spotify-main-view">
    <RouterView />
  </div>
</template>

<style scoped></style>
