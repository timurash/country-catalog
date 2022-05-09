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
    :body-style="{ padding: '0', height: '100%' }"
    class="country-card"
  >
    <div class="image-container">
      <img
        :src="country.flags.png"
        alt="none"
        class="image"
      >
    </div>
    <div class="country-info-container">
      <span class="title">{{ country.name.common }}</span>
      <div class="capital">
        Capital: {{ country.capital[0] }}
      </div>
      <div class="capital">
        Languages: {{ getLanguagesCaption(country) }}
      </div>
      <div class="capital">
        Currencies: {{ getCurrenciesCaption(country) }}
      </div>
    </div>
  </ElCard>
</template>

<style scoped lang="scss">
.country-card {
  width: 16rem;
  height: 22rem;
  margin: 1rem;

  .country-info-container {
    padding: 1rem;
    text-align: start;

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

  .image-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: 50%;

    .image {
      width: 100%;
      display: block;
    }
  }
}
</style>
