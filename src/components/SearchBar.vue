<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['search-text-update']);

const searchText = ref('');

function onSearchInput(event: Event & { target: HTMLInputElement }) {
  emit('search-text-update', event?.target?.value);
}
</script>

<template>
  <input
    v-model="searchText"
    type="text"
    @blur="onSearchInput"
  >
</template>
