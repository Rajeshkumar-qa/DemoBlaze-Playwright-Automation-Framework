import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly phonesCategory: Locator;
    readonly monitorsCategory: Locator;
    readonly cartLink: Locator;
    readonly placeOrderButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.phonesCategory = page.getByText('Phones', { exact: true });
        this.monitorsCategory = page.getByText('Monitors', { exact: true });

        this.cartLink = page.getByRole('link', {
            name: 'Cart',
            exact: true
        });

        this.placeOrderButton = page.getByRole('button', {
            name: 'Place Order',
            exact: true
        });
    }

    async selectProduct(productName: string) {
        const product = this.page.getByRole('link', {
            name: productName,
            exact: true
        }).first();

        await product.waitFor({
            state: 'visible',
            timeout: 15000
        });

        await product.click();
    }

    async selectPhonesCategory() {
        await this.phonesCategory.click();

        const product = this.page.getByRole('link', {
            name: 'Samsung galaxy s6',
            exact: true
        }).first();

        await product.waitFor({
            state: 'visible',
            timeout: 15000
        });
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