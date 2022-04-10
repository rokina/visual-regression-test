const { test } = require('@playwright/test');

test('visual regression test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '__screenshots__/screenshot.png' });
});
