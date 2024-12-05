const { test, expect } = require('@playwright/test');
const dotenv = require('dotenv'); 

dotenv.config({
    path: './env/.env.prod' // Path to your environment file
});

import { login } from './commands/login';

const unele = JSON.parse(JSON.stringify(require("./unassignedelements.json")));

test("Claim Specific Case from Table", async function ({ page }) {
    // Retrieve case number from environment variables
    const caseNumber = process.env.CASE_NUMBER; // e.g., "17527"

    if (!caseNumber) {
        throw new Error("CASE_NUMBER is missing in the environment file.");
    }

    // Login to the application
    await login(page);
    await expect(page).toHaveURL(/dashboard/);

    // Navigate to the Unassigned section
    await page.locator(unele.unassignedclick).click();
    await expect(page).toHaveURL(/unassigned/);

    // Search for the process (optional step if filtering by process name)
    const processName = process.env.PROCESS_NAME;
    if (processName) {
        await page.locator(unele.unassignedsearch).type(processName);
        await page.keyboard.press('Enter');
        await page.waitForTimeout(2000); // Adjust as needed for search results to load
    }

    // Locate the row with the matching case number
    const caseRow = page.locator(`//tr[td/label[normalize-space(text())='${caseNumber}']]`);

    // Verify the case row is visible
    await expect(caseRow).toBeVisible();

    // Locate the "Claim" button within the identified row
    const claimButton = caseRow.locator("a.claim-case-action");

    // Click the "Claim" button
    await claimButton.click();
    await page.pause();

});
