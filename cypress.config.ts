import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    blockHosts: ['*google-analytics.com', '*googletagmanager.com'],
    specPattern: 'cypress/e2e/features/*.feature',
    baseUrl: 'https://www.saucedemo.com/',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    supportFile: 'cypress/support/index.js',
  },
});
