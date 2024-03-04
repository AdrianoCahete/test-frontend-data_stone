import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('Visits the Home', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText('Home')
})

test('Get the page header navigation', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('nav > a')).toHaveCount(3)
  await expect(page.locator('nav > a').first()).toHaveText('Home')
  await expect(page.locator('nav > a').filter({ hasText: 'Produtos' })).toHaveCount(1)
  await expect(page.locator('nav > a').filter({ hasText: 'Clientes' })).toHaveCount(1)
})

test('Visits the Product (produtos) page', async ({ page }) => {
  await page.goto('/produtos')
  await expect(page.locator('h1')).toHaveText('Produtos')
  await expect(page.locator('table')).toHaveCount(1)
})

test('Visits the Clients (clientes) page', async ({ page }) => {
  await page.goto('/clientes')
  await expect(page.locator('h1')).toHaveText('Clientes')
  await expect(page.locator('table')).toHaveCount(1)
})
