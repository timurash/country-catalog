<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import { getAllCountries } from '../../api';
import { formatToKebabCase, infiniteScrollConditionCheck } from '../../utils';
import CountryModel from '../../models/CountryModel/CountryModel';
import CountryCard from './Cards/CountryCard.vue';
import SearchBar from './SearchBar.vue';

const countries = ref<CountryModel[]>();
const visibleCountriesCount = ref(30);

onMounted(async () => {
  countries.value = (await getAllCountries());
});

let ticking = false;

window.onscroll = () => {
  const isNeedToAddComponents = infiniteScrollConditionCheck();

  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (isNeedToAddComponents) {
        visibleCountriesCount.value += 6;
      }

      ticking = false;
    });

    ticking = true;
  }
};

const visibleCountries = computed(() => countries.value?.slice(0, visibleCountriesCount.value));

function getCountryPageRoute(country: CountryModel): string {
  return `/country/${formatToKebabCase(country.name.common)}`;
}
</script>

<template>
  <div class="catalog-container">
    <SearchBar :countries="countries" />
    <div class="country-cards-container">
      <div
        v-for="country in visibleCountries"
        :key="country.name.common"
      >
        <router-link
          :to="getCountryPageRoute(country)"
          style="text-decoration: none"
        >
          <CountryCard :country="country" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.catalog-container {
  padding: 2rem;
  display: flex;
  flex-direction: column;

  .country-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
