<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAllCountries, getCountriesByName } from '../api';

import CountryModel from '../models/CountryModel/CountryModel';
import CountryCard from './CountryCard.vue';
import SearchBar from './SearchBar.vue';

const countries = ref<CountryModel[]>();

onMounted(async () => {
  countries.value = await getAllCountries();
});

async function searchCountries(searchText: string) {
  countries.value = await getCountriesByName(searchText);
}

</script>

<template>
  <div>Country catalog</div>
  <SearchBar @search-text-update="searchCountries" />
  <div
    v-for="country in countries"
    :key="country.name"
  >
    <CountryCard :country="country" />
  </div>
</template>
