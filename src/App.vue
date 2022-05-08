<script setup lang="ts">
import { ElMenu, ElMenuItem } from 'element-plus';
import { ref } from 'vue';
import CountryCatalog from './components/CountryCatalog.vue';

const activeIndex = ref(1);

function handleSelect() {}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="top-menu"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item
      index="1"
      class="title"
    >
      Country catalog
    </el-menu-item>
    <el-menu-item index="2">
      GitHub
    </el-menu-item>
  </el-menu>
  <CountryCatalog />
</template>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
}

html {
  font-size: 14px;
}
</style>

<style scoped lang="scss">
.title {
  font-size: 20px;
  text-transform: uppercase;
}

.top-menu {
  justify-content: space-between;
}
</style>
