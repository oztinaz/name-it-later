import { beforeEach, describe, test, vi, expect } from 'vitest'
import { setActivePinia, createPinia, storeToRefs } from 'pinia'
import { useSpotifyProfileStore } from '@/stores/spotify/profile'

import { GetCurrentUsersProfileRequest } from '@/models/spotify/requests/api/GetCurrentUsersProfileRequest'
import type { SpotifyProfile } from '@/types/spotify/profile'

describe('stores/spotify/profile', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const mockSpotifyProfile: SpotifyProfile = {
    country: 'string',
    display_name: 'string',
    email: 'string',
    explicit_content: {
      filter_enabled: false,
      filter_locked: false
    },
    external_urls: {
      spotify: 'string'
    },
    followers: {
      href: 'string',
      total: 0
    },
    href: 'string',
    id: 'string',
    images: [
      {
        url: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
        height: 300,
        width: 300
      }
    ],
    product: 'string',
    type: 'string',
    uri: 'string'
  }

  test('fetchCurrentUsersProfile uses GetCurrentUsersProfileRequest.get method', async () => {
    const spotifyProfileStore = useSpotifyProfileStore()
    const { fetchCurrentUsersProfile } = spotifyProfileStore

    const spyFetchToken = vi
      .spyOn(GetCurrentUsersProfileRequest.prototype, 'get')
      .mockResolvedValueOnce(mockSpotifyProfile)

    const response = await fetchCurrentUsersProfile()

    expect(response).toStrictEqual(mockSpotifyProfile)
    expect(spyFetchToken).toHaveBeenCalledOnce()
  })

  test('setCurrentUserProfile sets currentUsersProfile', async () => {
    const spotifyProfileStore = useSpotifyProfileStore()
    const { setCurrentUserProfile } = spotifyProfileStore
    const { currentUsersProfile } = storeToRefs(spotifyProfileStore)

    setCurrentUserProfile(mockSpotifyProfile)

    expect(currentUsersProfile.value).toStrictEqual(mockSpotifyProfile)
  })
})
