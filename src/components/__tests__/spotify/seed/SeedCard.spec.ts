import SeedCard from "@/components/spotify/seed/SeedCard.vue";
import type { SeedCardItem } from "@/types/components/spotify/seed/SeedCardItem";

import { shallowMount, type VueWrapper } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe('components/spotify/seed/SeedCard', () => {
  const mockItem: SeedCardItem = {
    id: 'mock id',
    description: 'mock description',
    imageUrl: 'mock image url',
    title: 'mock title'
  }
  const wrapper: VueWrapper = shallowMount(SeedCard, {
    props: {
      item: mockItem
    }
  })

  test('checks image', () => {
    const image = wrapper.find('[data-test="image"]')
    expect(image.attributes('src')).toBe(mockItem.imageUrl)
    expect(image.attributes('height')).toBe("100")
    expect(image.attributes('width')).toBe("100")
  })

  test('checks title', async () => {
    const title = wrapper.find('[data-test="title"]')
    expect(title.text()).toBe(mockItem.title)
    expect(title.classes()).toStrictEqual(['bold'])
  })

  test('checks description', async () => {
    const description = wrapper.find('[data-test="description"]')
    expect(description.text()).toBe(mockItem.description)
  })
})