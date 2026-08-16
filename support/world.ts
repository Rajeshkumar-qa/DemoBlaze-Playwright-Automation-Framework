import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { SignUpPage } from '../pages/SignUpPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { PlaceOrderPage } from '../pages/PlaceOrderPage';

export class CustomWorld extends World {

    browser!: Browser;
    page!: Page;

    loginPage!: LoginPage;
    signUpPage!: SignUpPage;
    homePage!: HomePage;
    productPage!: ProductPage;
    placeOrderPage!: PlaceOrderPage;

    constructor(options: IWorldOptions) {
        super(options);
    }

    async init() {
        this.browser = await chromium.launch({
            headless: true
        });

        this.page = await this.browser.newPage();

        this.loginPage = new LoginPage(this.page);
        this.signUpPage = new SignUpPage(this.page);
        this.homePage = new HomePage(this.page);
        this.productPage = new ProductPage(this.page);
        this.placeOrderPage = new PlaceOrderPage(this.page);
    }

    async close() {
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);