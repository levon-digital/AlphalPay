const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl: 'https://alphapay.netlify.app/',
    defaultCommandTimeout: 50000,
    defaultBrowser: 'chrome',
  
  pageLoadTimeout: 50000,
  },
});
