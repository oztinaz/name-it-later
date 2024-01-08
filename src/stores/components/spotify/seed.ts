import type { SeedCardItem } from '@/types/components/spotify/seed/SeedCardItem'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useComponentSpotifySeedStore = defineStore('component-spotify-seed', () => {
  const items: Ref<SeedCardItem[]> = ref([])

  const query: Ref<string> = ref('')

  const type: Ref<'artist' | 'genre' | 'track'> = ref('artist')

  return {
    items,
    query,
    type
  }
})
