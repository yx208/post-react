import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from "eslint-config-prettier";
import pluginPrettier from 'eslint-plugin-prettier';

export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        files: ["packages/**/*.js", "packages/**/*.ts"],
        ignores: ["node_modules"],
        languageOptions: {
            globals: {
                ...globals.browser
            }
        },
        plugins: {
            prettier: pluginPrettier
        },
        rules: {
            semi: ["error", "never"]
        }
    }
];