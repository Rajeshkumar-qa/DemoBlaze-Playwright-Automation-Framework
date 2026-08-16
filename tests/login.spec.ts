import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../test-data/users.json';

test.describe('Login Tests', () => {

    test('TC03 - Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.login(
            users.validUser.username,
            users.validUser.password
        );
        await expect(loginPage.logoutLink).toBeVisible({timeout: 15000});
    });


    test('TC04 - Login with invalid username and valid password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.openLogin();
        await loginPage.enterLoginDetails(
            users.invalidUser.username,
            users.validUser.password
        );

        page.once('dialog', async dialog => {
            console.log('Login Alert:', dialog.message());
            expect(dialog.message()).toBe('User does not exist.');
            await dialog.accept();
        });

        await loginPage.clickLogin();
    });


    test('TC05 - Login with valid username and invalid password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.openLogin();
        await loginPage.enterLoginDetails(
            users.validUser.username,
            users.invalidUser.password
        );

        page.once('dialog', async dialog => {
            console.log('Login Alert:', dialog.message());
            expect(dialog.message()).toBe('Wrong password.');
            await dialog.accept();
        });
        await loginPage.clickLogin();
    });


    test('TC06 - Login with invalid username and invalid password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.openLogin();
        await loginPage.enterLoginDetails(
            users.invalidUser.username,
            users.invalidUser.password
        );

        page.once('dialog', async dialog => {
            console.log('Login Alert:', dialog.message());
            expect(dialog.message()).toBe('User does not exist.');
            await dialog.accept();
        });
        await loginPage.clickLogin();
    });


    test('TC10 - Login with valid credentials and logout', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.login(
            users.validUser.username,
            users.validUser.password
        );
        await expect(loginPage.logoutLink).toBeVisible({timeout: 15000});
        await loginPage.logout();
        await expect(loginPage.loginLink).toBeVisible({timeout: 10000});
    });
});