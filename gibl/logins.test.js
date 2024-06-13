const { test, expect } = require('@playwright/test');
import { login } from './commands/login';

const ele = JSON.parse(JSON.stringify(require("./elements.json")));

test("GIBL 247 Debit Card Block Test", async function({ page }) {
    await login(page);

    // GIBL Dashboard
    await page.locator(ele.startid).click();
    await expect(page).toHaveURL(/case/);
    await page.locator(ele.pagebutid).click();
    await page.getByPlaceholder(ele.palceholder).type("Debit Card Block");
    await page.keyboard.press('Enter');
    await page.locator(ele.blockid).click();

    // Switch to iframe context
    const iframe = page.frameLocator(ele.iframes);
    
    // Fill out the form fields in the iframe
    await iframe.locator(ele.acc_num).type(process.env.account_number, { delay: 70 });
    await iframe.locator(ele.mobile_num).type(process.env.mobile_number, { delay: 70 });

    // Dropdown Button
    await iframe.locator(ele.dropdowns).click();
    const optionsContainer = iframe.locator(ele.ul);     
    await optionsContainer.waitFor({ state: 'visible' });
    const option = iframe.locator(ele.ul);                
    await option.click();

    // Submit Button
    await iframe.locator(ele.submit).click();
    await page.pause();
});
