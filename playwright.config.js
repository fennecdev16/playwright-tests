// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://www.saucedemo.com',
    storageState:'storageState.json',
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],


});
