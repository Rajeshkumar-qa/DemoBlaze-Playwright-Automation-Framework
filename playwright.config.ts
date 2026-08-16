import { defineConfig, devices } from '@playwright/test';
import { env } from './utils/env';

export default defineConfig({
    testDir: './tests',
    workers: 3,
    use: {
        baseURL: env.baseURL,
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
    },

    reporter: [
        ['list'],
        ['allure-playwright'],
    ],

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});