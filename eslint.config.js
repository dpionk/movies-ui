import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,
  {
    rules: {
      'vue/no-unused-vars': 'warn',               
      'vue/multi-word-component-names': 'error',  
      'vue/require-prop-types': 'error',          
      'vue/no-mutating-props': 'error',           

      // TypeScript-Specific Rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], 
      '@typescript-eslint/explicit-function-return-type': 'warn',                 
      '@typescript-eslint/no-explicit-any': 'error',                             

      // General JavaScript Rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',                               
      'prefer-const': 'warn',                               
      'no-var': 'error',                                    
      'eqeqeq': ['error', 'always'],                        

      // Code Style & Consistency
      'semi': ['error', 'always'],                          
      'quotes': ['error', 'single', { avoidEscape: true }],
      'indent': ['error', 2],                             
      'comma-dangle': ['error', 'always-multiline'],  
    },
  },
];
