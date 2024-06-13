const { test, expect } = require('@playwright/test');

const dotenv = require('dotenv');
dotenv.config({ path: './env/.env.prod' });

const testdata = JSON.parse(JSON.stringify(require("../tests/data.json")));

test.describe("Data Driven Test", function () {  

  for (const data of testdata) {

    test.describe(`Add User ${data.id}`, function () {

      test("Create User", async function ({ page }, testdata = data) {
        test.setTimeout(60000); // 60 seconds // Setting a timeout for the entire test 
        await page.goto(process.env.BASE_URL1);
        await expect(page).toHaveURL(/webtables/);
        await page.locator("//button[@id='addNewRecordButton']").click();
        await page.getByPlaceholder("First Name").type(data.firstname);
        await page.getByPlaceholder("Last Name").type(data.lastname);
        await page.getByPlaceholder("name@example.com").type(data.email);
        await page.getByPlaceholder("Age").type(data.age);
        await page.getByPlaceholder("Salary").type(data.salary);
        await page.getByPlaceholder("Department").type(data.department);
        await page.locator("//button[@id='submit']").click();
      });
    });
  }
});
