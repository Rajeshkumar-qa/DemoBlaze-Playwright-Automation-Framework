import { Page, Locator } from '@playwright/test';

export class PlaceOrderPage {

    readonly page: Page;
    readonly nameInput: Locator;
    readonly countryInput: Locator;
    readonly cityInput: Locator;
    readonly creditCardInput: Locator;
    readonly monthInput: Locator;
    readonly yearInput: Locator;
    readonly purchaseButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.nameInput = page.locator('#name');
        this.countryInput = page.locator('#country');
        this.cityInput = page.locator('#city');
        this.creditCardInput = page.locator('#card');
        this.monthInput = page.locator('#month');
        this.yearInput = page.locator('#year');

        this.purchaseButton = page.getByRole('button', {
            name: 'Purchase'
        });
    }

    async enterOrderDetails(
        name: string,
        country: string,
        city: string,
        creditCard: string,
        month: string,
        year: string
    ) {

        await this.nameInput.fill(name);
        await this.countryInput.fill(country);
        await this.cityInput.fill(city);
        await this.creditCardInput.fill(creditCard);
        await this.monthInput.fill(month);
        await this.yearInput.fill(year);
    }

    async clickPurchase() {
        await this.purchaseButton.click();
    }
}