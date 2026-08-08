import { test, expect } from '@playwright/test';

test('Open DemoBlaze', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('STORE');
});