const dotenv = require('dotenv');
dotenv.config({ path: './env/.env.dev' });

async function login(page, username, password) {
    await page.goto(process.env.BASEURL);
    await page.locator("//input[@name='username']").type(username);
    await page.locator("//input[@placeholder='Password']").type(password);
    await page.locator("//button[contains(@class, 'oxd-button--main') and contains(@class, 'orangehrm-login-button')]").click();
}
module.exports = { login };
