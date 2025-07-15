const { expect } = require('@playwright/test');


class LoginPage{
    constructor(page){
        this.page=page;
        this.userNameInput =page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginBtn = page.locator('#login-button');
        this.loginError = page.locator('h3[data-test="error"]');

    }

    async login(username, password) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }

    async expectloginTofail() {
        await expect(this.loginError).toContainText('Epic sadface: Username and password do not match any user in this service');
    }
}

module.exports = { LoginPage };
