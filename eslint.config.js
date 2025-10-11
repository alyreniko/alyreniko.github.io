// eslint.config.js
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // Игнорируем папки
  {
    ignores: ['node_modules', '.nuxt', '.output', 'dist'],
  },
  // Для .vue файлов
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser, // для <script lang="ts">
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue: vuePlugin,
      tailwindcss: tailwindPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'tailwindcss/no-custom-classname': 'off',
      'prettier/prettier': ['error'],
    },
  },
  // Для TS/JS файлов
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      tailwindcss: tailwindPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'prettier/prettier': ['error'],
    },
  },
];
