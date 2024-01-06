import { describe, expect, test, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useSpotifyAuthorizationStore } from '@/stores/spotify/authorization'

import AskAuthorizationView from '@/views/spotify/AskAuthorizationView.vue'

describe('views/spotify/AskAuthorizationView', () => {
  const wrapper = shallowMount(AskAuthorizationView, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn
        })
      ]
    }
  })

  test('displays anchor message', () => {
    expect(wrapper.text()).toBe('Authorize')
  })

  test('checks anchor href', () => {
    const store = useSpotifyAuthorizationStore()
    const element = wrapper.find('[data-test="authorize-anchor"]')
    expect(element.attributes('href')).toBe(store.authorizationUrl)
  })
})
