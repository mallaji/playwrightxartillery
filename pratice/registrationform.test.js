const { test, expect } = require('@playwright/test');

test("Valid Submission and Verify Alert", async function({ page }) {
    await page.goto("https://chulo-solutions.github.io/qa-internship/");

    let alertMessage = '';
    page.on('dialog', async (dialog) => {
        alertMessage = dialog.message();
        await dialog.accept();
    });

    await page.locator("//input[@id='username']").fill("SantoshChand1");
    await page.locator("//input[@id='password']").fill("G5r@pLx1");
    await page.locator("//input[@id='creditCard']").fill("4111666622227777");
    await page.locator("//input[@id='telephone']").fill("(977) 011-9876");
    await page.locator("//button[@type='submit']").click();

    expect(alertMessage).toBe("Form submitted successfully!"); // Verify
});

test("Invalid Username and Verify Alert", async function({ page }) {
    await page.goto("https://chulo-solutions.github.io/qa-internship/");

    let alertMessage = '';
    page.on('dialog', async (dialog) => {
        alertMessage = dialog.message();
        await dialog.accept();
    });

    await page.locator("//input[@id='username']").fill("Santosh Chand"); // Invalid Username
    await page.locator("//input[@id='password']").fill("G5r@pLx1");
    await page.locator("//input[@id='creditCard']").fill("4111666622227777");
    await page.locator("//input[@id='telephone']").fill("(977) 011-9876");
    await page.locator("//button[@type='submit']").click();

    expect(alertMessage).toBe("Username must be alphanumeric and between 5 to 15 characters."); // Verify
});

test("Invalid Password and Verify Alert", async function({ page }) {
    await page.goto("https://chulo-solutions.github.io/qa-internship/");

    let alertMessage = '';
    page.on('dialog', async (dialog) => {
        alertMessage = dialog.message();
        await dialog.accept();
    });

    await page.locator("//input[@id='username']").fill("SantoshChand1");
    await page.locator("//input[@id='password']").fill("password"); // Invalid Password
    await page.locator("//input[@id='creditCard']").fill("4111666622227777");
    await page.locator("//input[@id='telephone']").fill("(977) 011-9876");
    await page.locator("//button[@type='submit']").click();

    expect(alertMessage).toBe("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."); // Verify
});

test("Invalid Credit Card Number and Verify Alert", async function({ page }) {
    await page.goto("https://chulo-solutions.github.io/qa-internship/");

    let alertMessage = '';
    page.on('dialog', async (dialog) => {
        alertMessage = dialog.message();
        await dialog.accept();
    });

    await page.locator("//input[@id='username']").fill("SantoshChand1");
    await page.locator("//input[@id='password']").fill("G5r@pLx1");
    await page.locator("//input[@id='creditCard']").fill("123456789"); // Invalid Credit Card Number
    await page.locator("//input[@id='telephone']").fill("(977) 011-9876");
    await page.locator("//button[@type='submit']").click();

    expect(alertMessage).toBe("Enter a valid credit card number."); // Verify
});

test("Invalid Telephone Number and Verify Alert", async function({ page }) {
    await page.goto("https://chulo-solutions.github.io/qa-internship/");

    let alertMessage = '';
    page.on('dialog', async (dialog) => {
        alertMessage = dialog.message();
        await dialog.accept();
    });

    await page.locator("//input[@id='username']").fill("SantoshChand1");
    await page.locator("//input[@id='password']").fill("G5r@pLx1");
    await page.locator("//input[@id='creditCard']").fill("4111666622227777");
    await page.locator("//input[@id='telephone']").fill("1234567890"); // Invalid Telephone Number
    await page.locator("//button[@type='submit']").click();

    expect(alertMessage).toBe("Telephone number must follow the format (XXX) XXX-XXXX.");
});