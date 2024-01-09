<script setup lang="ts">
import { watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useComponentSpotifySeedStore } from '@/stores/components/spotify/seed';

import SearchInput from '@/components/spotify/seed/SearchInput.vue';
import SeedCardsContainer from '@/components/spotify/seed/SeedCardsContainer.vue';

import type { SearchRequest } from '@/models/spotify/requests/api/SearchRequest';
import type { SpotifyArtist } from '@/types/spotify/Artist';
import type { SpotifyTrack } from '@/types/spotify/Track';

const props = defineProps<{
  mapper: Function
  retriever: Function
  type: 'artist' | 'genre' | 'track'
  request?: SearchRequest<SpotifyArtist | SpotifyTrack>
}>()

const componentSpotifySeedStore = useComponentSpotifySeedStore()
const { items, query, type } = storeToRefs(componentSpotifySeedStore)

watch(query, async () => {
  if (query.value === '') {
    items.value = []
    return
  }

  let response: any
  if (props.request) {
    props.request.setQuery(query.value)
    response = await props.retriever(props.request)
  } else {
    response = props.retriever()
  }

  items.value = props.mapper(response)
})

onMounted(() => {
  items.value = []
  query.value = ''
  type.value = props.type
})
</script>

<template>
  <div class="seed">
    <SearchInput />
    <SeedCardsContainer />
  </div>
</template>

<style scoped>
.seed {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>