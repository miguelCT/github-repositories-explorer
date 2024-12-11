/** @type {import("eslint").Linter.Config} */
const config = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
    },
    plugins: ['@typescript-eslint', 'react'],
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:storybook/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:prettier/recommended',
    ],
    rules: {
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
        'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/consistent-type-imports': [
            'warn',
            {
                prefer: 'type-imports',
                fixStyle: 'inline-type-imports',
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: {
                    attributes: false,
                },
            },
        ],
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": [
                    "**/*.spec.*",
                    "**/*.test.*",
                    "**/*.stories.*",
                    "**/.storybook/**/*.*"
                ],
                "peerDependencies": true
            }
        ],
        "no-restricted-exports": ["error", { "restrictDefaultExports": { "direct": false } }]
    },
};
module.exports = config;
