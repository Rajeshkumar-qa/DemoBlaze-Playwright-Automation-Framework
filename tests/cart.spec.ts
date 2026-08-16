import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { PlaceOrderPage } from '../pages/PlaceOrderPage';
import users from '../test-data/users.json';

let loginPage: LoginPage;
let homePage: HomePage;
let productPage: ProductPage;
let placeOrderPage: PlaceOrderPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    placeOrderPage = new PlaceOrderPage(page);
    await page.goto('/');
    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );
});


test('TC07 - Login and add product to cart', async ({ page }) => {
    await homePage.selectProduct('Samsung galaxy s6');
    page.once('dialog', async dialog => {
        console.log('Cart Alert:', dialog.message());
        expect(dialog.message()).toBe('Product added.');
        await dialog.accept();
    });
    await productPage.addToCart();
});


test('TC08 - Purchase a phone', async ({ page }) => {
    await homePage.selectPhonesCategory();
    await homePage.selectProduct('Samsung galaxy s6');
    page.once('dialog', async dialog => {
        console.log('Cart Alert:', dialog.message());
        expect(dialog.message()).toBe('Product added.');
        await dialog.accept();
    });
    await productPage.addToCart();
    await homePage.openCart();
    await homePage.clickPlaceOrder();
    await placeOrderPage.orderModal.waitFor({
        state: 'visible',
        timeout: 15000
    });
    await expect(placeOrderPage.nameInput).toBeVisible();
    await placeOrderPage.enterOrderDetails(
    users.purchaseDetails.name,
    users.purchaseDetails.country,
    users.purchaseDetails.city,
    users.purchaseDetails.creditCard,
    users.purchaseDetails.month,
    users.purchaseDetails.year
    );
    page.once('dialog', async dialog => {
        console.log('Purchase Alert:', dialog.message());
        expect(dialog.message()).toContain('Thank you for your purchase!');
        await dialog.accept();
    });
    await placeOrderPage.clickPurchase();
});


test('TC09 - Purchase a monitor', async ({ page }) => {
    await homePage.selectMonitorsCategory();
    await homePage.selectProduct('Apple monitor 24');
    page.once('dialog', async dialog => {
        console.log('Cart Alert:', dialog.message());
        expect(dialog.message()).toBe('Product added.');
        await dialog.accept();
    });
    await productPage.addToCart();
    await homePage.openCart();
    await homePage.clickPlaceOrder();
    await placeOrderPage.orderModal.waitFor({
        state: 'visible',
        timeout: 15000
    });
    await expect(placeOrderPage.nameInput).toBeVisible();
    await placeOrderPage.enterOrderDetails(
    users.purchaseDetails.name,
    users.purchaseDetails.country,
    users.purchaseDetails.city,
    users.purchaseDetails.creditCard,
    users.purchaseDetails.month,
    users.purchaseDetails.year
    );
    page.once('dialog', async dialog => {
        console.log('Purchase Alert:', dialog.message());
        expect(dialog.message()).toContain('Thank you for your purchase!');
        await dialog.accept();
    });
    await placeOrderPage.clickPurchase();
});