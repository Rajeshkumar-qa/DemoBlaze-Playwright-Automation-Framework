import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import 'dotenv/config';

setDefaultTimeout(30000);

Given('I am on the DemoBlaze home page', async function (this: CustomWorld) {
    await this.page.goto('https://www.demoblaze.com/');
});

When('I login with valid credentials', async function (this: CustomWorld) {
    await this.loginPage.login(
        process.env.USERNAME!,
        process.env.PASSWORD!
    );
});

Then('I should be logged in successfully', async function (this: CustomWorld) {
    await expect(this.loginPage.logoutLink).toBeVisible({
        timeout: 15000
    });
});