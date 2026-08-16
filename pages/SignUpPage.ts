import { Page, Locator } from '@playwright/test';

export class SignUpPage {
    readonly page: Page;
    readonly signUpLink: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signUpButton: Locator;
    readonly closeButton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.signUpLink = page.getByRole('link', { name: 'Sign up' });
        this.usernameInput = page.locator('#sign-username');
        this.passwordInput = page.locator('#sign-password');
        this.signUpButton = page.locator('#signInModal .btn-primary');
        this.closeButton = page.locator('#signInModal .btn-secondary');
    }
    async enterSignUpDetails(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }
    async clickSignUp() {
        await this.signUpButton.click();
    }
    async clickClose() {
        await this.closeButton.click();
    }
}