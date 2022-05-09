<script setup lang="ts">
import TopMenu from './components/TopMenu/TopMenu.vue';
</script>

<template>
  <TopMenu />
  <RouterView />
</template>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
}

html {
  font-size: 14px;
}

html,
body,
#app {
  height: 100%;
}
</style>
