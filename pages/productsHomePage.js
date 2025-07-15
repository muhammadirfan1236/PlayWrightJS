const { expect } = require('@playwright/test');


class ProductsHomePage{
    constructor(page){
        this.page=page;
        this.productsTitleTxt = page.locator('.title');
        this.addToCartBtn=page.locator('#add-to-cart-sauce-labs-bike-light')
        this.removeBtn=page.locator('#remove-sauce-labs-bike-light')
        this.shoppingCartBadge=page.locator('.shopping_cart_badge')
        this.shoppingCartBadgeLink=page.locator('.shopping_cart_link')
    }


    async expectedUserToNavigateToProductsPageSuccessfully(productsPageTitle) {
        await expect(this.productsTitleTxt).toContainText(productsPageTitle);
    }

    async clickOnAddToCartButton() {
        await this.addToCartBtn.click();
    }

    async expectedButtonToHaveRemovetext(removeButtonText) {
        await expect(this.removeBtn).toHaveText(removeButtonText);
    }

    async expectedShoppingCartBadgeToAddOneNum() {
        await expect(this.shoppingCartBadge).toContainText('1');
    }

    async clickOnShoppingCartBadgeLink() {
        await this.shoppingCartBadgeLink.click();
    }




}
module.exports={ProductsHomePage}