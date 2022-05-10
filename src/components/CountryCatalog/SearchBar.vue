<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElAutocomplete } from 'element-plus';
import { Search } from '@element-plus/icons-vue';

import { suggestCountryName } from '../../api';
import { formatToKebabCase } from '../../utils';
import AutocompleteValueModel from '../../models/AutocompleteValueModel';

const searchText = ref('');

const querySearch = async (
  queryString: string,
  callback: (arr: Array<AutocompleteValueModel>) => void,
) => {
  const results = (await suggestCountryName(queryString))
    .slice(0, 20)
    .map((x) => ({ value: x?.name?.common }));
  callback(results);
};

const router = useRouter();

async function onCountrySelect(countryName: AutocompleteValueModel) {
  await router.push(`/country/${formatToKebabCase(countryName.value)}`);
}
</script>

<template>
  <div class="search-bar">
    <ElAutocomplete
      v-model="searchText"
      :fetch-suggestions="querySearch"
      :trigger-on-focus="false"
      clearable
      placeholder="Search for a country"
      :prefix-icon="Search"
      @select="onCountrySelect"
    />
  </div>
</template>

<style scoped lang="scss">
.search-bar {
  text-align: start;

  :deep(.el-autocomplete) {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1rem 1rem;

    .el-input {
      height: 52px;
      font-weight: 500;
    }
  }
}
</style>
