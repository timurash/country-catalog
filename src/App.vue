<script setup lang="ts">
import TopMenu from './components/TopMenu/TopMenu.vue';
</script>

<template>
  <TopMenu />
  <RouterView v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </RouterView>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
