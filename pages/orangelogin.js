const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'dev';
dotenv.config({ path: `./env/.env.${env}` });

class LoginPage {
    constructor(page) {
        this.page = page;
        this.useridSelector = "//input[@name='username']";  
        this.passidSelector = "//input[@placeholder='Password']";  
        this.subidSelector = "//button[@type='submit']";
    }

    async login() {
        await this.page.fill(this.useridSelector, "Admin", { delay: 70 });  
        await this.page.fill(this.passidSelector, "admin123", { delay: 70 });  
        await this.page.click(this.subidSelector);
    }
}

module.exports = LoginPage;


