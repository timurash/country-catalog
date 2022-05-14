module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      parser: 'vue-eslint-parser',
      rules: {
      },
      extends: [
        'airbnb-base',
        'plugin:vue/vue3-recommended',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.vue'],
      },
    },
  ],
};
