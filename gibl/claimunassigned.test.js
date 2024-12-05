const { test, expect } = require('@playwright/test');
import { login } from './commands/login';

const ele = JSON.parse(JSON.stringify(require("./elements.json")));

test("Process Reports", async function({ page }) {
    await login(page);
    await expect(page).toHaveURL(/dashboard/)
    await page.locator(ele.unassignedclick).click()
    await expect(page).toHaveURL(/unassigned/)
    await page.getByPlaceholder(ele.palceholder).type("Merchant Acquisition");
    await page.keyboard.press('Enter');
    await page.pause();
});