import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mercadolibre.com/');
  await page.getByRole('link', { name: 'México' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).fill('iphone');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.getByRole('link', { name: 'Apple iPhone 13 (128 GB) -' }).first().click();
  await page.getByRole('button', { name: 'Comprar ahora' }).click();
  await page.getByTestId('login-link').click();
});