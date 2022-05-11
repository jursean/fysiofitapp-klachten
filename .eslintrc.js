module.exports = {
    env: {
        node: true,
        jest: true,
        es6: true,
    },
    extends: ['universe/native'],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
        'import/ignore': ['react-native'],
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        'no-unused-vars': 'warn',
        'no-undef': 'warn',
        'no-empty-pattern': 'warn',
        'react/self-closing-comp': 'warn',
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'off',
    },
};
