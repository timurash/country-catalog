<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAllCountries, getCountriesByName } from '../../api';

import CountryModel from '../../models/CountryModel/CountryModel';
import CountryCard from './CountryCard.vue';
import SearchBar from './SearchBar.vue';

const countries = ref<CountryModel[]>();

onMounted(async () => {
  countries.value = (await getAllCountries()).slice(0, 18);
});

async function searchCountries(searchText: string): Promise<void> {
  countries.value = await getCountriesByName(searchText);
}

function getCountryPageRoute(country: CountryModel): string {
  return `/country/${country.name.common.toLowerCase()}`;
}
</script>

<template>
  <div class="catalog-container">
    <SearchBar @search-text-update="searchCountries" />
    <div class="country-cards-container">
      <div
        v-for="country in countries"
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
  }
}
</style>
