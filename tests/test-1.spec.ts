import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mercadolibre.com/');
  await page.getByRole('link', { name: 'México' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).fill('iphone 10');
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).press('Enter');
  await page.getByRole('option', { name: 'iphone 10', exact: true }).click();
  await page.getByRole('link', { name: 'Apple iPhone 16 (128 GB) - Negro - Distribuidor Autorizado' }).click();
  await page.getByRole('button', { name: 'Comprar ahora' }).click();
});