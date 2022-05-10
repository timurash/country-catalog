<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { ElMenu, ElMenuItem } from 'element-plus';

const activeIndex = ref('');

const router = useRouter();

watch(
  () => router.currentRoute.value.path,
  (newRoute) => {
    activeIndex.value = newRoute;
  },
);
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="top-menu"
    mode="horizontal"
    :router="true"
  >
    <el-menu-item
      index="/"
      class="title"
    >
      Country catalog
    </el-menu-item>
    <el-menu-item
      index="/about"
    >
      About
    </el-menu-item>
    <el-menu-item index="2">
      GitHub
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="scss">
.top-menu {
  display: flex;
  justify-content: flex-start;

  .title {
    font-weight: 600;
    text-transform: uppercase;
  }
}
</style>
