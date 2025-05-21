/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,

  // Tentukan environment (Node dan Jest untuk testing)
  env: {
    node: true,
    es2021: true,
    jest: true,
  },

  // Gunakan parser dari TypeScript ESLint
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },

  //  settings: {
  //    'import/resolver': {
  //      typescript: {
  //        project: './tsconfig.json',
  //      },
  //    },
  //  },

  // Aturan dan ekstensi yang digunakan
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Aturan dasar TypeScript
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended', // Untuk manajemen import
    'plugin:import/typescript',
    'plugin:prettier/recommended', // Integrasi dengan Prettier
  ],

  plugins: ['@typescript-eslint', 'import', 'prettier'],

  rules: {
    // Gaya penulisan umum
    'prettier/prettier': 'error',
    'no-console': 'off', // ['warn', { allow: ['warn', 'error'] }]
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
    'import/no-unresolved': 'off', // biarkan TypeScript yang mengurus
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
  },

  overrides: [
    {
      files: ['*.test.ts', '*.spec.ts'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
  ],
};
