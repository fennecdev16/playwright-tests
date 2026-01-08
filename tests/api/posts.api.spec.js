const { test, expect } = require("../../fixtures/api/api.fixture");

test.describe("@api Posts", () => {
  test("GET post", async ({ api }) => {
    const res = await api.get("https://jsonplaceholder.typicode.com/posts/1");

    expect(res.status()).toBe(200);

    const body = await res.json();
    expect(body.id).toBe(1);
  });

  test("GET Article", async ({ api }) => {
    const res = await api.get("https://fakestoreapi.com/products/1");

    expect(res.status()).toBe(200);

    const body = await res.json();
    expect(body.id).toBe(1);
    expect(body.category).toBe("men's clothing");
  });

  test("POST post", async ({ api }) => {
    const res = await api.post("https://jsonplaceholder.typicode.com/posts", {
      title: "Playwright test",
      body: "API Test",
      userId: 1,
    });

    expect(res.status()).toBe(201);
    const body = await res.json()
    expect(body.title).toBe("Playwright test");
  });
 
  test("PUT post", async ({ api }) => {
    const res = await api.put("https://jsonplaceholder.typicode.com/posts/1", {
      title: "Update Playwright test",
      body: "Update API Test",
      userId: 1,
    });

    expect(res.status()).toBe(200);
    const body = await res.json()
    expect(body.title).toBe("Update Playwright test");
  });
});
