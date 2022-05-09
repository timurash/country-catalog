<script setup lang="ts">
import { ElCard } from 'element-plus';
</script>

<template>
  <div class="about-page">
    <ElCard class="box-card">
      <template #header>
        <h3>PROJECT OVERVIEW</h3>
      </template>
      <div class="description-container">
        <p>
          This is a personal project to improve developer skills
        </p>
        <h3>Technology stack</h3>
        <ul>
          <li>
            <a
              href="https://vuejs.org"
              target="_blank"
            >
              Vue 3 (Composition API) + Vue Router
            </a>
          </li>
          <li>
            <a
              href="https://element-plus.org"
              target="_blank"
            >
              Element Plus
            </a>
          </li>
          <li>
            <a
              href="https://www.typescriptlang.org"
              target="_blank"
            >TypeScript</a>
          </li>
          <li>
            <a
              href="https://vitejs.dev/"
              target="_blank"
            >
              Vite
            </a>
          </li>
        </ul>
      </div>
    </ElCard>
  </div>
</template>

<style scoped lang="scss">
.about-page {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .box-card {
    width: 40%;
    min-width: 10rem;
    max-width: 70rem;
    margin: 3rem;

    .description-container {
      text-align: left;

      a,
      a:visited,
      a:active {
        color: inherit;
        text-decoration: none;
      }

      ul li {
        padding: 0.25rem;
      }
    }
  }
}
</style>
