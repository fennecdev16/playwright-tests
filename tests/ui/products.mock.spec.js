const { test, expect } = require("@playwright/test");


test.use({ storageState: "storageState.json" });
test("@mock real API", async ({ page }) => {
  await page.route("**/products", (route) =>
    route.fulfill({
      status: 200,
      json: [{ id: 1, title: "Mock Product" }],
    })
  );

  await page.goto("https://fakestoreapi.com/products");

  await expect(page.getByText("Mock Product")).toBeVisible();
});

test("@mock API error 500", async ({ page }) => {
  await page.route("**/products", (route) =>
    route.fulfill({
      status: 500, // Erreur serveur
      contentType: "application/json",
      body: JSON.stringify({ error: "Internal Server Error" }),
    })
  );

  await page.goto("https://fakestoreapi.com/products");

   
  await expect(page.getByText(/error/i)).toBeVisible();
});
test("@mock API error 404", async ({ page }) => {
  await page.route("**/products", (route) =>
    route.fulfill({
      status: 404, // Ressource non trouvée
      contentType: "application/json",
      body: JSON.stringify({ error: "Not Found" }),
    })
  );

  await page.goto("https://saucedemo.com/products");

  // Vérifie que ton application affiche un message d'erreur adapté
  await expect(page.getByText(/not found/i)).toBeVisible();
});


