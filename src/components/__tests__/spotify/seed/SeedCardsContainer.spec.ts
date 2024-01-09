import SeedCardsContainer from "@/components/spotify/seed/SeedCardsContainer.vue";
import type { SeedCardItem } from "@/types/components/spotify/seed/SeedCardItem";

import { shallowMount, type VueWrapper } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing'

describe('components/spotify/seed/SeedCard', () => {
  const mockItem: SeedCardItem = {
    id: 'mock id',
    description: 'mock description',
    imageUrl: 'mock image url',
    title: 'mock title'
  }
  const mockItems: SeedCardItem[] = [mockItem, mockItem]
  const wrapper: VueWrapper = shallowMount(SeedCardsContainer, {
    global: {
      plugins: [createTestingPinia({
        createSpy: vi.fn,
        initialState: {
          'component-spotify-seed': {
            items: mockItems
          },
        },
      })],
    },
  })

  test('checks SeedCard components', () => {
    const seedCards = wrapper.findAll('[data-test="seed-card"]')
    expect(seedCards).toHaveLength(mockItems.length)
  })
})