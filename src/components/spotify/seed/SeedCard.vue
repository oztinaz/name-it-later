<script setup lang="ts">
import type { SeedCardItem } from '@/types/components/spotify/seed/SeedCardItem';

const props = defineProps<{
  item: SeedCardItem
}>()
</script>

<template>
  <div class="seed-card">
    <img :src="props.item.imageUrl" alt="Seed Card" height="100" width="100" data-test="image">
    <div class="info">
      <div class="bold" data-test="title">{{ props.item.title }}</div>
      <div data-test="description">{{ props.item.description }}</div>
    </div>
  </div>
</template>

<style scoped>
.seed-card {
  align-items: center;
  border: 2px solid rgb(235, 235, 235);
  border-radius: 5px;
  background: rgb(245, 245, 245);
  display: flex;
  gap: 10px;
  padding: 10px;
}

.bold {
  font-weight: bold;
}

img {
  border-radius: 5px;
}
</style>