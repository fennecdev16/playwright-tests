const { test: base } = require('@playwright/test');

exports.test = base.extend({
  api: async ({ request }, use) => {
    const api = {
      get: (url) => request.get(url),
      post: (url, data) =>
        request.post(url, { data }),
      put: (url, data) =>
        request.put(url, { data }),
      delete: (url) =>
        request.delete(url),
    };

    await use(api);
  },
});

exports.expect = base.expect;
