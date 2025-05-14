const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pesquisa-emissao-co2.azurewebsites.net/',
  },
});
