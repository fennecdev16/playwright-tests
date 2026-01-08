const { test, expect } = require('@playwright/test');

test('@api GET posts', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body).toHaveProperty('userId', 1);
  expect(body).toHaveProperty('id', 1);
  expect(body).toHaveProperty('title', "sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
});

test('@api POST create post', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Playwright API',
        body: 'API testing',
        userId: 1,
      },
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.title).toBe('Playwright API');
});

