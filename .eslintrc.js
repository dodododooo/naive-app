const PROD = import.meta.env.PROD;

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    eqeqeq: ['warn', 'always', { null: 'never' }],
    'no-console': PROD ? 'error' : 'off',
    'no-debugger': PROD ? 'error' : 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'consistent-return': 'off',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
