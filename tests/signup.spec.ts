import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';
import { generateUsername, testPassword } from '../utils/testData';

test('TC01 - Sign Up with valid data', async ({ page }) => {

    const signUpPage = new SignUpPage(page);
    const username = generateUsername();
    await page.goto('/');
    await signUpPage.signUpLink.click();
    await signUpPage.enterSignUpDetails(
        username,
        testPassword
    );

    page.once('dialog', async dialog => {
        console.log('Signup Alert:', dialog.message());
        expect(dialog.message()).toBe('Sign up successful.');
        await dialog.accept();
    });
    await signUpPage.clickSignUp();
});


test('TC02 - Sign Up and close the model', async ({ page }) => {

    const signUpPage = new SignUpPage(page);
    const username = generateUsername();
    await page.goto('/');
    await signUpPage.signUpLink.click();
    await signUpPage.enterSignUpDetails(
        username,
        testPassword
    );
    await signUpPage.clickClose();
    await expect(signUpPage.usernameInput).not.toBeVisible();

});