// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  ignores: [
    '**/coverage',
    '.vscode/**',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
  }
});
