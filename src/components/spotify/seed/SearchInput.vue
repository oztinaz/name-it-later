<script setup lang="ts">
import { useComponentSpotifySeedStore } from '@/stores/components/spotify/seed.ts'
import { storeToRefs } from 'pinia';
import { computed, type ComputedRef } from 'vue';

const store = useComponentSpotifySeedStore()
const { query, type } = storeToRefs(store)

const placeholder: ComputedRef<string> = computed((): string => {
  return `Search ${type.value}s`
})
</script>

<template>
  <input type="text" class="form-control" :placeholder="placeholder" v-model="query" data-test="search-input">
</template>

<style scoped></style>