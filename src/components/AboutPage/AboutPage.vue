<script setup lang="ts">
import { ElCard } from 'element-plus';
</script>

<template>
  <div class="about-page">
    <ElCard class="box-card">
      <template #header>
        <h3>COUNTRY CATALOG PROJECT</h3>
      </template>
      <div class="description-container">
        <p>
          This project is integration with the
          <a href="https://restcountries.com/#api-endpoints-v2">
            REST Countries V2 API
          </a>
        </p>
        <p>
          The original goal was to try out the most up-to-date front-end tools
          at the moment like composition API, Vite bundler, pNPM package manager and etc
        </p>
        <h3>Technology stack:</h3>
        <ul>
          <li>
            <a
              href="https://vuejs.org"
              target="_blank"
            >
              Vue 3 (Composition API)
            </a>
          </li>
          <li>
            <a
              href="https://router.vuejs.org"
              target="_blank"
            >
              Vue Router
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
              href="https://element-plus.org"
              target="_blank"
            >
              Element Plus UI library
            </a>
          </li>
          <li>
            <a
              href="https://vitejs.dev"
              target="_blank"
            >
              Vite
            </a>
          </li>
          <li>
            <a
              href="https://jestjs.io"
              target="_blank"
            >
              Jest
            </a>
          </li>
          <li>
            <a
              href="https://testing-library.com"
              target="_blank"
            >
              Vue Testing Library
            </a>
          </li>
          <li>
            <a
              href="https://pnpm.io"
              target="_blank"
            >
              pNPM package manager
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

    :deep(.el-card__header) {
      text-align: left;
      padding: 0.5rem 1rem;
    }

    .description-container {
      text-align: left;

      a,
      a:visited,
      a:active {
        color: inherit;
        text-decoration: underline;
      }

      ul li {
        padding: 0.25rem;
      }
    }
  }
}
</style>
