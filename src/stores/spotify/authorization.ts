import { defineStore } from 'pinia'
import { computed, ref, type ComputedRef, type Ref } from 'vue'

export const useSpotifyAuthorizationStore = defineStore('spotify-authorization', () => {
  const accountsUrl: Ref<string> = ref(import.meta.env.VITE_SPOTIFY_ACCOUNTS_URL)
  const clientId: Ref<string> = ref(import.meta.env.VITE_SPOTIFY_CLIENT_ID)
  const clientSecret: Ref<string> = ref(import.meta.env.VITE_SPOTIFY_CLIENT_SECRET)
  const redirectUri: Ref<string> = ref(import.meta.env.VITE_SPOTIFY_REDIRECT_URI)
  const responseType: Ref<string> = ref('code')
  const state: Ref<string> = ref(import.meta.env.VITE_SPOTIFY_STATE)
  const scope: Ref<string> = ref(import.meta.env.VITE_SPOTIFY_SCOPE)

  const authorizationUrl: ComputedRef<string> = computed((): string => {
    return (
      `${accountsUrl.value}/authorize?` +
      `client_id=${clientId.value}&` +
      `redirect_uri=${redirectUri.value}&` +
      `response_type=${responseType.value}&` +
      `state=${state.value}&` +
      `scope=${scope.value}`
    )
  })

  return {
    accountsUrl,
    authorizationUrl,
    clientId,
    clientSecret,
    redirectUri
  }
})
