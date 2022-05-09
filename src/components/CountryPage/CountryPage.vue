<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { ElCard, ElButton } from 'element-plus';

import { getCountriesByName } from '../../api';
import CountryModel from '../../models/CountryModel/CountryModel';

const isLoading = ref(true);
const countryInfo = ref<CountryModel>();

const { countryName } = useRoute().params;

onMounted(async () => {
  [countryInfo.value] = await getCountriesByName(countryName as string);
  isLoading.value = false;
});

function getPopulationCaption(): string {
  return `Population: ${countryInfo.value?.population as number} people`;
}
</script>

<template>
  <div class="country-page">
    <template v-if="isLoading">
      loading
    </template>
    <ElCard
      v-else
      class="box-card"
    >
      <template #header>
        <div class="card-header">
          <span>{{ countryInfo.name.common }}</span>
          <ElButton
            class="button"
            type="text"
          >
            Operation button
          </ElButton>
        </div>
      </template>
      <div class="country-description">
        <div class="text-block">
          <div class="caption">
            {{ countryInfo.name.official }}
          </div>
          <div class="caption">
            {{ countryInfo.name.official }}
          </div>
          <div class="caption">
            {{ getPopulationCaption() }}
          </div>
        </div>
        <img
          :src="countryInfo.flags.png"
          alt="none"
          class="image"
        >
      </div>
    </ElCard>
  </div>
</template>

<style scoped lang="scss">
.country-page {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .box-card {
    width: 70%;
    min-width: 10rem;
    max-width: 70rem;
    margin: 3rem;

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .country-description {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;

      .text-block {
        display: flex;
        align-items: start;
        flex-direction: column;
      }

      .image {
        display: block;
        box-shadow: var(--el-box-shadow-lighter);
      }
    }
  }
}
</style>
