import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  transformIgnorePatterns: [
    'node_modules/(?!variables/.*)'
  ],
  verbose: true,
  transform: {
    '.*\\.(vue)$': '@vue/vue3-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  rootDir: './',
  moduleDirectories: [
    'node_modules',
    'src',
  ],
};

export default config;
