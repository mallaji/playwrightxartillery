const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/orangelogin');

test.only("Valid Login", async function({ page }) {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login("Admin", "admin123");
    await expect(page).toHaveURL(/dashboard/); // Verify if dashboard is displayed
});

test("Empty Form Submission", async function({ page }) {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await page.click(loginPage.subid); // Click submit without filling the form
    const errorMessage = await page.locator("//div[@class='orangehrm-login-slot-wrapper']//div[1]//div[1]//span[1]").textContent(); // Get error message
    expect(errorMessage).toBe("Required"); // Verify if "Required" is displayed
});

test("Invalid Username and Valid Password", async function({ page }) {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login("test", "admin123");
    const errorMessage = await page.locator(".oxd-alert-content.oxd-alert-content--error").textContent(); // Get error message
    console.log("Error Message is: " + errorMessage);
});

test("Valid Username and Invalid Password", async function({ page }) {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login("Admin", "test1234");
    const errorMessage = await page.locator(".oxd-alert-content.oxd-alert-content--error").textContent(); // Get error message
    expect(errorMessage.includes("Invalid")).toBeTruthy(); // Verify if error message contains "Invalid"
});

test("Invalid Username and Invalid Password", async function({ page }) {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login("InvalidUsername", "InvalidPassword");
    const errorMessage = await page.locator(".oxd-alert-content.oxd-alert-content--error").textContent(); // Get error message
    expect(errorMessage.includes("Invalid")).toBeTruthy(); // Verify if error message contains "Invalid"
});

test("Username Length Validation", async function({ page }) {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    const usernameInput = await page.getByPlaceholder("Username");
    await usernameInput.type("This is maximum length validation test."); // Enter long username
    await page.click("body"); // Click outside the username field
    await page.waitForTimeout(200);
    const validationMessage = await page.$('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message'); // Locate validation message
    if (validationMessage) {
        console.log('Validation error message is displayed.');
    } else {
        console.error('Validation error message is not displayed.');
    }
});
