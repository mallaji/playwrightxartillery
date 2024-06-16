const { test, expect } = require('@playwright/test');
import { login } from './commands/login';

const ele = JSON.parse(JSON.stringify(require("./elements.json")));

test("Process Reports", async function({ page }) {
    await login(page);
    await expect(page).toHaveURL(/dashboard/)
    await page.locator(ele.main_menu).click()
    await page.pause();
    await page.locator(ele.search1).fill("Process Reports", { delay: 70 })
    await page.keyboard.press('Enter')
    await page.locator(ele.process_reports).click()
    await expect(page).toHaveURL(/generic/)
    await page.pause();
});
