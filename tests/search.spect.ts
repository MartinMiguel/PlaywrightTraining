import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('search playwright docs (codegen)', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('locator');
  await page.getByRole('link', { name: 'Locators', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Locators', exact: true })).toBeVisible();
});