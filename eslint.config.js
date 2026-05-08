const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      // Nomeação
      'camelcase': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'allow'
        },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow'
        },
        {
          selector: 'typeLike',
          format: ['PascalCase']
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE']
        }
      ],

      // Identação
      'indent': ['error', 2, { SwitchCase: 1 }],

      // Semicolons
      'semi': ['error', 'always'],

      // Quotes
      'quotes': ['error', 'single', { avoidEscape: true }],

      // Variáveis
      'no-var': 'error',
      'prefer-const': 'error',

      // Comparação
      'eqeqeq': ['error', 'always'],

      // Logs
      'no-console': ['warn'],
      'no-debugger': 'error',

      // TypeScript específico
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            constructors: 'no-public'
          }
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  }
];
