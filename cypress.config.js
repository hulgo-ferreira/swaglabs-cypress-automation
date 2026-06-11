const { defineConfig } = require("cypress");
const { allureCypress } = require('allure-cypress/reporter');

module.exports = defineConfig({
  // Move os screenshots padrão para a área de coleta do Allure
  screenshotFolder: 'allure-results/screenshots',

  e2e: {
    baseUrl: "https://www.saucedemo.com",
    viewportWidth: 1366,
    viewportHeight: 768,

    setupNodeEvents(on, config) {
      allureCypress(on, config);
      return config;
    }
  }
})