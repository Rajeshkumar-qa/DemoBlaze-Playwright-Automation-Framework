import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: './tests',

    workers: 1,

    use: {
        baseURL: 'https://www.demoblaze.com',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
    },

    reporter: [
        ['list'],
        ['allure-playwright'],
    ],

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
});