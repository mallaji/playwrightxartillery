const { test, expect } = require('@playwright/test');
const { login } = require('./login');

test("Valid Login", async function({ page }) {
    await login(page, "Admin", "admin123");
    await expect(page).toHaveURL(/dashboard/); // Verify if dashboard is displayed
});

test("Empty Form Submission", async function({ page }) {
    await page.goto(process.env.baseurl); 
    await page.locator("button[type='submit']").click(); 
    const errorMessage = await page.locator("//div[@class='orangehrm-login-slot-wrapper']//div[1]//div[1]//span[1]").textContent(); // Get error message
    expect(errorMessage === "Required").toBeTruthy(); // Verify if "Required" is displayed
});

test("Invalid Username and Valid Password", async function({ page }) {
    await login(page, "test", "admin123");
    const errorMessage = await page.locator(".oxd-alert-content.oxd-alert-content--error").textContent(); // Get error message
    console.log("Error Message is: " + errorMessage);
});

test("Valid Username and Invalid Password", async function({ page }) {
    await login(page, "Admin", "test1234");
    const errorMessage = await page.locator(".oxd-alert-content.oxd-alert-content--error").textContent(); // Get error message
    expect(errorMessage.includes("Invalid")).toBeTruthy(); // Verify if error message contains "Invalid"
});

test("Invalid Username and Invalid Password", async function({ page }) {
    await login(page, "InvalidUsername", "InvalidPassword");
    const errorMessage = await page.locator(".oxd-alert-content.oxd-alert-content--error").textContent(); // Get error message
    expect(errorMessage.includes("Invalid")).toBeTruthy(); // Verify if error message contains "Invalid"
});

test("Username Length Validation", async function({ page }) {
    await page.goto(process.env.baseurl);
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