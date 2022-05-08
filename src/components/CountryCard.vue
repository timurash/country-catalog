<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import CountryModel from '../models/CountryModel/CountryModel';

const props = defineProps({
  country: { type: Object as PropType<CountryModel>, required: true },
});
</script>

<template>
  <div>{{ country.name }}</div>
  <div>{{ country.capital }}</div>
  <div>{{ country.flags.png }}</div>
</template>
