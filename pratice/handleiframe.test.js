const {test, expect}= require('@playwright/test');
const dotenv = require('dotenv');
dotenv.config({ path: './env/.env.test'});

test("Handle Frames", async function({ page }) {
    await page.goto("https://www.lambdatest.com/selenium-playground/iframe-demo/")
    const iframe = await page.frameLocator("//iframe[@id='iFrame1']") //Locating Frame
    await iframe.locator("//div[@class='rsw-ce']").type("My Test")
    //await page.pause()
})
