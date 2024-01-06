import { describe, expect, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import HomeView from '@/views/HomeView.vue'

describe('views/HomeView', () => {
  const wrapper = shallowMount(HomeView)

  test('displays message', () => {
    expect(wrapper.text()).toBe('Home View')
  })
})
