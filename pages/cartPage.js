const { expect } = require('@playwright/test');


class CartPage{
    constructor(page){
        this.page=page;
        this.cartPageTitle =page.locator('span[data-test="title"]');
        this.checkoutBtn = page.locator('#checkout');

    }

    async expcetedToNavigateToCartPageSuccessfully(cartPageTitle) {
        await expect(this.cartPageTitle).toHaveText(cartPageTitle);
    }

    async clickOnCheckoutButton() {
        await this.checkoutBtn.click();
    }

}

module.exports = { CartPage };
