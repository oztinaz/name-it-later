import { beforeEach, describe, expect, test } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSpotifyAuthorizationStore } from '@/stores/spotify/authorization'

describe('stores/spotify/authorization', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const mockString: string = 'mock string'

  test('creates authorizationUrl properly', () => {
    import.meta.env.VITE_SPOTIFY_ACCOUNTS_URL = mockString
    import.meta.env.VITE_SPOTIFY_CLIENT_ID = mockString
    import.meta.env.VITE_SPOTIFY_REDIRECT_URI = mockString
    import.meta.env.VITE_SPOTIFY_STATE = mockString
    import.meta.env.VITE_SPOTIFY_SCOPE = mockString

    const store = useSpotifyAuthorizationStore()

    expect(store.authorizationUrl).toBe(
      `${mockString}/authorize?` +
        `client_id=${mockString}&` +
        `redirect_uri=${mockString}&` +
        `response_type=code&` +
        `state=${mockString}&` +
        `scope=${mockString}`
    )
  })
})
