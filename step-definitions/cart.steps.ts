import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

When('I select the Phones category', async function (this: CustomWorld) {
    await this.homePage.selectPhonesCategory();
});

When('I select the Samsung galaxy s6 product', async function (this: CustomWorld) {
    await this.homePage.selectProduct('Samsung galaxy s6');
});

When('I select the Monitors category', async function (this: CustomWorld) {
    await this.homePage.selectMonitorsCategory();
});

When('I select the Apple monitor 24 product', async function (this: CustomWorld) {
    await this.homePage.selectProduct('Apple monitor 24');
});

When('I add the product to cart', async function (this: CustomWorld) {
    await this.productPage.addToCart();
});

When('I open the cart', async function (this: CustomWorld) {
    await this.homePage.openCart();
});

Then('I should see the Samsung galaxy s6 in the cart', async function (this: CustomWorld) {
    await expect(
        this.page.getByRole('cell', {
            name: 'Samsung galaxy s6',
            exact: true
        }).first()
    ).toBeVisible();
});

When('I click Place Order', async function (this: CustomWorld) {
    await this.homePage.clickPlaceOrder();
});

When('I enter the purchase details', async function (this: CustomWorld) {
    await this.placeOrderPage.enterOrderDetails(
        'Rajesh Kumar',
        'India',
        'Trivandrum',
        '1234567890987654',
        '08',
        '2026'
    );
});

When('I click Purchase', async function (this: CustomWorld) {
    await this.placeOrderPage.clickPurchase();
});

Then('I should see the purchase success message', async function (this: CustomWorld) {
    await expect(
        this.page.getByText('Thank you for your purchase!', { exact: true })
    ).toBeVisible();
});