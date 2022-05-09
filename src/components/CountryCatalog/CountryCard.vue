<script setup lang="ts">
import { ElCard } from 'element-plus';
import { defineProps, PropType } from 'vue';
import CountryModel from '../../models/CountryModel/CountryModel';

const props = defineProps({
  country: { type: Object as PropType<CountryModel>, required: true },
});

function getLanguagesCaption(country: CountryModel) {
  return Object.values(country.languages).join(', ');
}

function getCurrenciesCaption(country: CountryModel) {
  return Object.keys(country.currencies)
    .map((key) => `${key} (${country.currencies[key].name}: ${country.currencies[key].symbol})`)
    .join(', ');
}
</script>

<template>
  <ElCard
    class="country-card"
  >
    <img
      :src="country.flags.png"
      alt="none"
      class="image"
    >
    <div class="country-info-container">
      <span class="title">{{ country.name.common }}</span>
      <div class="capital">
        <strong>Capital:</strong> {{ country.capital[0] }}
      </div>
      <div class="capital">
        <strong>Languages:</strong> {{ getLanguagesCaption(country) }}
      </div>
      <div class="capital">
        <strong>Currencies:</strong> {{ getCurrenciesCaption(country) }}
      </div>
    </div>
  </ElCard>
</template>

<style scoped lang="scss">
.country-card {
  width: 16rem;
  height: 21rem;
  margin: 1rem;
  box-shadow: var(--el-box-shadow-lighter);

  &:hover {
    box-shadow: var(--el-box-shadow-light);
  }

  :deep(.el-card__body) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
  }

  .image {
    max-height: 50%;
    width: 100%;
    display: block;
  }

  .country-info-container {
    height: 50%;
    padding: 1rem;
    text-align: start;
    box-sizing: border-box;

    .title {
      font-size: 18px;
      font-weight: 550;
      margin-top: 0.5rem;
    }

    .capital {
      font-size: 1rem;
      font-weight: 400;
      margin-top: 0.5rem;
    }
  }
}
</style>
