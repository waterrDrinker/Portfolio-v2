import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    extends: ['next/core-web-vitals', 'airbnb', 'prettier'],
    rules: {
      'prefer-const': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-double'],
      indent: ['warn', 2],
      'max-len': ['error', { code: 80 }],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always-and-inside-groups',
        },
      ],
      'react/jsx-filename-extension': [
        2,
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ],
      'react/react-in-jsx-scope': 'off',
    },
  },
];
