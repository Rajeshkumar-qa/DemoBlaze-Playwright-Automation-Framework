import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly loginLink: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {

        this.page = page;

        this.loginLink = page.getByRole('link', { name: 'Log in' });
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.locator('#logInModal .btn-primary');
        this.logoutLink = page.getByRole('link', { name: 'Log out' });
    }

    async openLogin() {
        await this.loginLink.click();
    }

    async enterLoginDetails(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(username: string, password: string) {
        await this.openLogin();
        await this.enterLoginDetails(username, password);
        await this.clickLogin();
    }

    async logout() {
        await this.logoutLink.click();
    }
}