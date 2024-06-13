const { test, expect } = require('@playwright/test');
const dotenv = require('dotenv');
dotenv.config({ path: './env/.env.prod' });

test("Handle Dropdown for Select Type", async function({ page }) {
    await page.goto(process.env.baseURL2)
    await page.locator("(//select[@id='state'])[1]").selectOption({label:"Goa"}) // Using Label
    await page.waitForTimeout(2000)
    await page.locator("(//select[@id='state'])[1]").selectOption({value:"Himachal Pradesh"}) // Using Value
    await page.waitForTimeout(2000)
    await page.locator("(//select[@id='state'])[1]").selectOption({index:4}) // Using Index
    await page.waitForTimeout(2000)
});

test.skip("Handle Dropdown Multiple Values", async function({ page }) {
    await page.goto(process.env.baseURL2)
    await page.locator("#hobbies").selectOption(['Playing','Swimming'])
    await page.waitForTimeout(2000)
});
