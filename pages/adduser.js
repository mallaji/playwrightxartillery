const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'dev';
dotenv.config({ path: `./env/.env.${env}` });

class Adduser {
    constructor(page) {
        this.page = page;
        this.searchid = "//input[@class='oxd-input oxd-input--active' and @placeholder='Search']";
        this.adminid = "//a[@class='oxd-main-menu-item' and @href='/web/index.php/admin/viewAdminModule']//span[text()='Admin']";
        this.subidSelector = "//button[contains(@class, 'oxd-button--main') and contains(@class, 'orangehrm-login-button')]";
    }
    
    async login(username, password) {
        await this.page.fill(this.useridSelector, username, { delay: 70 });
        await this.page.fill(this.passidSelector, password, { delay: 70 });
        await this.page.click(this.subidSelector);
    }
}

module.exports = LoginPage;