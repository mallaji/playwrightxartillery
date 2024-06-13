const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/orangelogin')

test("Valid Login", async function({ page }) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const loginPage = new LoginPage(page)
    await loginPage.login()
    await expect(page).toHaveURL(/dashboard/)
})


