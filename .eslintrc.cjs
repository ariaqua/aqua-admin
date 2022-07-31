/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "parser": "vue-eslint-parser",
    "rules": {
        "vue/multi-word-component-names": 0
    }
})
