const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/orangelogin');

test("Valid Login", async function({ page }) {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('Admin', 'admin123'); // Add the user credentials for username and password
    await expect(page).toHaveURL(/dashboard/);
});



