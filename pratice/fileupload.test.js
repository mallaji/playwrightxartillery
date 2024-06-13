const { test, expect } = require('@playwright/test')
const dotenv = require('dotenv')
dotenv.config({ path: './env/.env.prod' })

test("File Upload Test", async function({ page }) {
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("./uploadfiles/1.1-MB.bmp")
    await page.pause()
    // await page.locator("//input[@id='file-submit']").click()
    // expect(await page.locator("//h3")).toHaveText("File Uploaded!")
})
