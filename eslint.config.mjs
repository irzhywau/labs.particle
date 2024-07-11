import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import { fixupConfigRules } from '@eslint/compat';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], ignores: ['*.css', '*.svg'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  ...fixupConfigRules(pluginPrettier),
  {
    rules: {
      'max-len': [
        'warn',
        {
          code: 130
        }
      ],
      'no-console': ['off'],
      'no-param-reassign': [
        'error',
        {
          props: false
        }
      ],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: { consistent: true, multiline: true },
          ObjectPattern: { consistent: true, multiline: true },
          ImportDeclaration: { multiline: true, minProperties: 3 },
          ExportDeclaration: { multiline: true, minProperties: 3 }
        }
      ],
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.tsx']
        }
      ]
    }
  }
];
