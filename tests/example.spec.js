const { test } = require('@playwright/test');

test('visual regression test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.screenshot({ path: '__screenshots__/screenshot.png', fullPage: true });
});
