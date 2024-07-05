const {test, expect}= require('@playwright/test');

//test.use({viewport:{width:500,height:700}})

test("Valid Login", async function({ page }) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)
    await page.getByPlaceholder("Username").type("Admin",{delay:50}) 
    await page.locator("input[placeholder='Password']").type("admin123",{delay:70}) 
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL(/dashboard/) 
    await page.getByAltText("profile picture").first().click()
    await page.locator("//a[normalize-space()='Logout']").click() 
    await expect(page).toHaveURL(/login/)
})





