const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    env: {
      ENVIRONMENT: 'test' // ou 'production'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
