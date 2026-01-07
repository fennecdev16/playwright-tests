const { test } = require('@playwright/test');

test('Setup authentication', async ({ page }) => {
  await page.goto('/');

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await page.waitForURL('**/inventory.html');

  await page.context().storageState({ path: 'storageState.json' });
});
