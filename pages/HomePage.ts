import { Page, Locator } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly cartLink: Locator;
    readonly logoutLink: Locator;
    readonly phonesCategory: Locator;
    readonly monitorsCategory: Locator;
    readonly placeOrderButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.cartLink = page.locator('#cartur');

        this.logoutLink = page.getByRole('link', { name: 'Log out' });

        this.phonesCategory = page.getByText('Phones', { exact: true });

        this.monitorsCategory = page.getByText('Monitors', { exact: true });

        this.placeOrderButton = page.getByRole('button', {
            name: 'Place Order'
        });
    }

    async selectProduct(productName: string) {
        await this.page.getByText(productName, { exact: true }).click();
    }

    async selectPhonesCategory() {
        await this.phonesCategory.click();
    }

    async selectMonitorsCategory() {
        await this.monitorsCategory.click();
    }

    async openCart() {
        await this.cartLink.click();
    }

    async clickPlaceOrder() {
        await this.placeOrderButton.click();
    }
}