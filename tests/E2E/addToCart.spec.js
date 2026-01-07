const { test, expect } = require('@playwright/test');
const ProductsPage = require('../../pages/ProductsPage');

test.use({ storageState: 'storageState.json' });

test('@smoke Add item to cart (authenticated)', async ({ page }) => {
  const productsPage = new ProductsPage(page);

  await page.goto('/inventory.html');
  await expect(productsPage.pageTitle).toHaveText('Products');

  await productsPage.addItemToCartByName('Sauce Labs Backpack');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  
});

test('@regression Add two items to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);

  await page.goto('/inventory.html');
  await expect(productsPage.pageTitle).toHaveText('Products');

  await productsPage.addItemToCartByName('Sauce Labs Backpack');
  await productsPage.addItemToCartByName('Sauce Labs Bike Light');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
});
