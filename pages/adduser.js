const {expect} = require("@playwright/test")

const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'dev';
dotenv.config({ path: `./env/.env.${env}` });

class Adduser {
    constructor(page) {
        this.page = page;
        this.adminid = "//a[@class='oxd-main-menu-item' and @href='/web/index.php/admin/viewAdminModule']//span[text()='Admin']";
        this.addbuttonid = "(//button[contains(@class, 'oxd-button') and contains(@class, 'oxd-button--medium') and contains(@class, 'oxd-button--secondary')])[2]";
        this.addusertitle="//h6[text()='Add User']";
        this.roleid="(//div[contains(@class, 'oxd-select-text') and contains(@class, 'oxd-select-text--active')])[1]";
    }

    async verifyaddusertitle(){
        //await expect(this.page.locator(this.addusertitle)).toBeVisible()
        try {
            await expect(this.page.locator(this.addusertitle)).toBeVisible();
        } catch (error) {
            console.error("Add User title is not visible:", error);
            throw error; 
        }
    }

    async addadmin() {
        await this.page.click(this.adminid);
        await this.page.click(this.addbuttonid);
        //await this.page.pause();
    }
}

module.exports = Adduser;