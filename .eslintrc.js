module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    // 'eslint:recommended',
    'airbnb-base',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-essential',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.VITE_USER_NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.VITE_USER_NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'warn',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
