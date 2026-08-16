import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { SignUpPage } from '../pages/SignUpPage';

let signUpPage: SignUpPage;
let signUpMessage = '';

When('I open the sign up modal', async function (this: CustomWorld) {
    signUpPage = new SignUpPage(this.page);

    await signUpPage.signUpLink.click();

    await expect(signUpPage.usernameInput).toBeVisible();
});

When('I enter valid sign up details', async function (this: CustomWorld) {
    await signUpPage.enterSignUpDetails(
        `Rajesh${Date.now()}`,
        'rajesh123'
    );
});

When('I submit the sign up form', async function (this: CustomWorld) {
    const dialogPromise = this.page.waitForEvent('dialog');
    await signUpPage.clickSignUp();
    const dialog = await dialogPromise;
    signUpMessage = dialog.message();
    await dialog.accept();
});

Then('I should see the sign up success message', async function () {
    expect(signUpMessage).toContain('Sign up successful');
});

When('I close the sign up modal', async function () {
    await signUpPage.clickClose();
});

Then('the sign up modal should be closed', async function () {
    await expect(signUpPage.usernameInput).not.toBeVisible();
});