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
