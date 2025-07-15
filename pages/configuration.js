class Configuration {
    constructor(page) {
        this.page = page;
    }

    async navigateToBaseURL(url) {
        await this.page.goto(url);
    }

    async closeBrowser() {
        await this.page.close();
    }
}

module.exports = { Configuration };


