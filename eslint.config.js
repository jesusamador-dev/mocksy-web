import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import jestPlugin from 'eslint-plugin-jest';
import prettierPlugin from 'eslint-plugin-prettier';
import parser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default [
  ...tseslint.config(
    { ignores: ['dist', '.storybook', 'tailwind.config.ts', 'jest.config.ts'] },
    {
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      files: ['src/**/*.{js,jsx,ts,tsx}', 'tests/**/*.{js,jsx,ts,tsx}'],
      languageOptions: {
        parser,
        parserOptions: {
          ecmaVersion: 2021,
        },
        globals: globals.browser,
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        '@typescript-eslint': tsPlugin,
        tailwindcss,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        semi: 'error',
        'prettier/prettier': ['error'],
        'padding-line-between-statements': [
          'error',
          { blankLine: 'any', prev: '*', next: 'import' },
          { blankLine: 'always', prev: 'import', next: 'function' },
          { blankLine: 'always', prev: 'import', next: 'const' },
          { blankLine: 'always', prev: 'const', next: 'export' },
        ],
        'no-var': 'error',
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        '@typescript-eslint/typedef': [
          'error',
          {
            variableDeclaration: true,
            parameter: true,
            memberVariableDeclaration: true,
            propertyDeclaration: true,
          },
        ],
        'no-restricted-syntax': [
          'error',
          {
            selector: "CallExpression[callee.name='useState']:not(CallExpression[typeArguments])",
            message: 'useState must have a type argument, e.g. useState<number>(0).',
          },
        ],
      },
    },
  ),

  {
    files: ['**/__tests__/**/*', '**/*.test.{ts,tsx}'],
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{ts,tsx,js,jsx,json,html}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
    },
  },
];
