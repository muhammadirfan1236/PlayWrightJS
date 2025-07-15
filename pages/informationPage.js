const { expect } = require('@playwright/test');


class InformationPage{
    constructor(page){
        this.page=page;
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueBtn = page.locator('#continue');

    }


    async fillcheckoutInformation(firstName, lastName, postalCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
    }

    async clickOnContinueButton() {
        await this.continueBtn.click();
    }
    

   
}

module.exports = { InformationPage };
