const dotenv = require('dotenv');
dotenv.config({ path: './env/.env.dev' });

async function login(page, username, password) {
    await page.goto(process.env.BASEURL); 
    await page.getByPlaceholder("Username").type("Admin"); 
    await page.locator("input[placeholder='Password']").type(); 
    await page.locator("//button[@type='submit']").click(); 
}
module.exports = { login };