module.exports = {
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
    },
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'prettier'
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'no-unused-vars': 'off',
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multi-word-component-names': 'warn'
    }
}