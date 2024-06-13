const {test, expect}= require('@playwright/test');
const dotenv = require('dotenv');
dotenv.config({
  path: './env/.env.prod'
});

const users_data = [["First1","Last1","test@yopmail.com","25","2500","QA",]]

users_data.forEach(data=>{

    test("Create User", async function({ page }) {
        await page.goto(process.env.BASE_URL1)
        await expect(page).toHaveURL(/webtables/)
        await page.locator("//button[@id='addNewRecordButton']").click()
        await page.getByPlaceholder("First Name").type(data[0],{delay:100})
        await page.getByPlaceholder("Last Name").type(data[1],{delay:100})
        await page.getByPlaceholder("name@example.com").type(data[2],{delay:100})
        await page.getByPlaceholder("Age").type(data[3],{delay:100})
        await page.getByPlaceholder("Salary").type(data[4],{delay:100})
        await page.getByPlaceholder("Department").type(data[5],{delay:100})
        await page.locator("//button[@id='submit']").click()
    })
})
