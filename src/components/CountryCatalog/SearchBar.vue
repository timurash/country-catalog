<script setup lang="ts">
import { ref, PropType } from 'vue';
import { useRouter } from 'vue-router';
import { ElAutocomplete } from 'element-plus';
import { Search } from '@element-plus/icons-vue';

import CountryModel from '../../models/CountryModel/CountryModel';
import { formatToKebabCase } from '../../utils';
import AutocompleteValueModel from '../../models/AutocompleteValueModel';

const props = defineProps({
  countries: { type: Array as PropType<Array<CountryModel> | undefined>, required: true },
});

const searchText = ref('');

const querySearch = (
  queryString: string,
  callback: (string: Array<{ value: string }>) => void,
) => {
  const results = (props.countries?.filter((x) => x.name.common.toLowerCase()
    .includes(queryString.toLowerCase()))
    .slice(0, 20)
    .map((x) => ({ value: x?.name?.common }))) ?? [];
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
