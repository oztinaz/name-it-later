import { GetCurrentUsersProfileRequest } from '@/models/spotify/requests/api/GetCurrentUsersProfileRequest'
import type { SpotifyProfile } from '@/types/spotify/Profile'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useSpotifyProfileStore = defineStore('spotify-profile', () => {
  const currentUsersProfileRequest = ref(new GetCurrentUsersProfileRequest())

  const currentUsersProfile: Ref<SpotifyProfile | null> = ref(null)

  const fetchCurrentUsersProfile = async (): Promise<SpotifyProfile> => {
    return await currentUsersProfileRequest.value.get()
  }

  const setCurrentUserProfile = (p: SpotifyProfile | null): void => {
    currentUsersProfile.value = p
  }

  return {
    currentUsersProfile,
    fetchCurrentUsersProfile,
    setCurrentUserProfile
  }
})
