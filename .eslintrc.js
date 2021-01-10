module.exports = {
  extends: [
    'eslint:recommended',
    'google',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'jest', 'simple-import-sort'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'require-jsdoc': [
      'off',
    ],
    'react/prop-types': [
      'off',
    ],
    'no-multiple-empty-lines': [
      'error', {'max': 1},
    ],
    // Use simple import instead of others
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
  },
  globals: {
    'document': true,
  },

};
