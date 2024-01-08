import SearchInput from "@/components/spotify/seed/SearchInput.vue";

import { shallowMount, type VueWrapper } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing'

import { useComponentSpotifySeedStore } from '@/stores/components/spotify/seed.ts'

describe('components/spotify/seed/SearchInput', () => {
  const wrapper: VueWrapper = shallowMount(SearchInput, {
    global: {
      plugins: [createTestingPinia({
        createSpy: vi.fn
      })],
    },
  })

  test('checks placeholder', () => {
    const store = useComponentSpotifySeedStore()
    expect(wrapper.vm.placeholder).toBe(`Search ${store.type}s`)
  })

  test('updates query when input typed', async () => {
    const input = wrapper.find('[data-test="search-input"]')
    const store = useComponentSpotifySeedStore()

    const mockStr = 'mock str'
    await input.setValue(mockStr)
    expect(store.query).toBe(mockStr)
  })
})