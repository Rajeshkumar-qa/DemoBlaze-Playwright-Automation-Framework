import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { PlaceOrderPage } from '../pages/PlaceOrderPage';
import users from '../test-data/users.json';


test('TC07 - Login and add product to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    await page.goto('/');

    // Login
    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );

    // Select product
    await homePage.selectProduct('Samsung galaxy s6');

    // Add product to cart
    page.once('dialog', async dialog => {

        console.log('Cart Alert:', dialog.message());

        expect(dialog.message()).toBe('Product added.');

        await dialog.accept();
    });

    await productPage.addToCart();
});


test('TC08 - Purchase a phone', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const placeOrderPage = new PlaceOrderPage(page);

    await page.goto('/');

    // Login
    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );

    // Select Phones category
    await homePage.selectPhonesCategory();

    // Select phone
    await homePage.selectProduct('Samsung galaxy s6');

    // Add to cart
    page.once('dialog', async dialog => {

        console.log('Cart Alert:', dialog.message());

        expect(dialog.message()).toBe('Product added.');

        await dialog.accept();
    });

    await productPage.addToCart();

    // Open Cart
    await homePage.openCart();

    // Click Place Order
    await homePage.clickPlaceOrder();

    // Enter purchase details
    await placeOrderPage.enterOrderDetails(
        'Rajesh Kumar',
        'India',
        'Trivandrum',
        '1234567890123456',
        '08',
        '2026'
    );

    // Purchase
    page.once('dialog', async dialog => {

        console.log('Purchase Alert:', dialog.message());

        expect(dialog.message()).toContain(
            'Thank you for your purchase!'
        );

        await dialog.accept();
    });

    await placeOrderPage.clickPurchase();
});

test('TC09 - Purchase a monitor', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const placeOrderPage = new PlaceOrderPage(page);

    await page.goto('/');

    // Login
    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );

    // Select Monitors category
    await homePage.selectMonitorsCategory();

    // Select monitor
    await homePage.selectProduct('Apple monitor 24');

    // Add to cart
    page.once('dialog', async dialog => {

        console.log('Cart Alert:', dialog.message());

        expect(dialog.message()).toBe('Product added.');

        await dialog.accept();
    });

    await productPage.addToCart();

    // Open Cart
    await homePage.openCart();

    // Click Place Order
    await homePage.clickPlaceOrder();

    // Enter purchase details
    await placeOrderPage.enterOrderDetails(
        'Rajesh Kumar',
        'India',
        'Trivandrum',
        '1234567890123456',
        '08',
        '2026'
    );

    // Purchase
    page.once('dialog', async dialog => {

        console.log('Purchase Alert:', dialog.message());

        expect(dialog.message()).toContain(
            'Thank you for your purchase!'
        );

        await dialog.accept();
    });

    await placeOrderPage.clickPurchase();
});