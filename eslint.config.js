import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      import: importPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
        },
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'import/no-unresolved': 'error',

      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error',
    },
  },
  {
    files: ['**/*.test.js'],
    plugins: {
      jest,
    },
    languageOptions: {
      globals: globals.jest,
    },
  },
  prettier,
];
