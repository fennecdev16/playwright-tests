class ProductsPage {
  constructor(page) {
    this.page = page;

    this.pageTitle = page.locator('.title');
    this.items = page.locator('.inventory_item');
  }

  async addItemToCartByName(itemName) {
    const item = this.items.filter({ hasText: itemName });
    await item.locator('button').click();
  }

  async removeItemFromCartByName(itemName){
    const item = this.items.filter({hasText:itemName});
    await item.locator('button').click()

  }
}

module.exports = ProductsPage;
