<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { ElCard, ElButton, ElIcon } from 'element-plus';
import { MapLocation } from '@element-plus/icons-vue';

import { getCountriesByName } from '../../api';
import CountryModel from '../../models/CountryModel/CountryModel';
import { formatKebabToNormal } from '../../utils';

const isLoading = ref(true);
const countryInfo = ref<CountryModel>();

const { countryName } = useRoute().params;

onMounted(async () => {
  [countryInfo.value] = await getCountriesByName(
    formatKebabToNormal(countryName as string),
  );
  isLoading.value = false;
});

function getPopulationCaption(country: CountryModel): string {
  return `${country.population}`;
}

function getCurrenciesCaption(country: CountryModel): string {
  return Object.keys(country.currencies)
    .map((currencyKey) => `${country.currencies[currencyKey].name} (${currencyKey} - ${country.currencies[currencyKey].symbol})`)
    .join(', ');
}

function getLanguagesCaption(country: CountryModel): string {
  return Object.values(country.languages).join(', ');
}

function getTimezonesCaption(country: CountryModel): string {
  return Object.values(country.timezones).join(', ');
}
</script>

<template>
  <div class="country-page">
    <ElCard
      v-if="!isLoading"
      class="box-card"
    >
      <template #header>
        <div class="card-header">
          <span>{{ countryInfo.name.common }}</span>
          <a
            :href="countryInfo.maps.googleMaps"
            style="text-decoration: none"
            target="_blank"
          >
            <ElButton
              class="button"
              type="text"
            >
              Google maps
              <ElIcon class="el-icon--right"><MapLocation /></ElIcon>
            </ElButton>
          </a>
        </div>
      </template>
      <div class="country-description">
        <div class="text-block">
          <div class="caption">
            <strong>Official name:</strong> {{ countryInfo.name.official }}
          </div>
          <div class="caption">
            <strong>Capital:</strong> {{ countryInfo.capital[0] }}
          </div>
          <div class="caption">
            <strong>Region:</strong> {{ countryInfo.region }}
          </div>
          <div class="caption">
            <strong>Languages:</strong> {{ getLanguagesCaption(countryInfo) }}
          </div>
          <div class="caption">
            <strong>Currencies:</strong> {{ getCurrenciesCaption(countryInfo) }}
          </div>
          <div class="caption">
            <strong>Timezones:</strong> {{ getTimezonesCaption(countryInfo) }}
          </div>
          <div class="caption">
            <strong>Population:</strong> {{ getPopulationCaption(countryInfo) }} people
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
    width: 50%;
    min-width: 10rem;
    max-width: 70rem;
    margin: 3rem;

    .card-header {
      font-size: 22px;
      font-weight: 600;

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
        width: 60%;
        display: flex;
        align-items: start;
        flex-direction: column;

        .caption {
          padding: 0.25rem;
          font-size: 14px;
          text-align: left;
        }
      }

      .image {
        max-height: 160px;
        display: block;
        box-shadow: var(--el-box-shadow-lighter);
      }
    }
  }
}
</style>
