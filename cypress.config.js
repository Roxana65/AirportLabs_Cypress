const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    onBeforeLoad(win) {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
