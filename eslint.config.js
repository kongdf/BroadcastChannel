import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  astro: true,
  ignores: ['src/assets/style.css', 'src/assets/telegram.css'],
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
  },
})
