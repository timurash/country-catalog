<script setup lang="ts">
import { ref } from 'vue';
import { ElInput } from 'element-plus';
import { Search } from '@element-plus/icons-vue';

const emit = defineEmits(['search-text-update']);

const searchText = ref('');

function querySearch(queryText: string) {
  emit('search-text-update', queryText);
}
</script>

<template>
  <ElInput
    v-model="searchText"
    class="country-search-input"
    placeholder="Search for a country"
    :suffix-icon="Search"
    @change="querySearch"
  />
</template>

<style scoped lang="scss">
.country-search-input {
  width: 100%;
  max-width: 500px;
  height: 52px;
  margin: 0 0 2rem 1rem;
}
</style>
