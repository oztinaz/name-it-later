<script setup lang="ts">
import SeedCard from '@/components/spotify/seed/SeedCard.vue'

import { useComponentSpotifySeedStore } from '@/stores/components/spotify/seed.ts'
import { storeToRefs } from 'pinia';

const store = useComponentSpotifySeedStore()
const { items } = storeToRefs(store)
</script>

<template>
  <div class="seed-cards-container">
    <SeedCard v-for="item in items" :key="item.id" :item="item" data-test="seed-card"/>
  </div>
</template>

<style scoped>
.seed-cards-container {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  max-height: 400px;
  overflow-y: auto;
}
</style>