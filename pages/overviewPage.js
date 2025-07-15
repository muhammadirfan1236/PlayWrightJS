const { expect } = require('@playwright/test');


class OverviewPage{
    constructor(page){
        this.page=page;
        this.page = page;
        this.overviewPageTitleTxt = page.locator('span[data-test="title"]');
        this.finishBtn = page.locator('#finish');
    }

    async expcetedToNavigateToOverviewPageSuccessfully(overviewPageTitle) {
        await expect(this.overviewPageTitleTxt).toHaveText(overviewPageTitle);
    }

    async clickOnFinishButton() {
        await this.finishBtn.click();
    }



   
}

module.exports = { OverviewPage };
