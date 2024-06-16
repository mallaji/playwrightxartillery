const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'dev';
dotenv.config({ path: `./env/.env.${env}` });

class LoginPage {
    constructor(page) {
        this.page = page;
        this.url = process.env.BASEURL; // Use environment variable for URL
        this.useridSelector = "//input[@name='username']";
        this.passidSelector = "//input[@class='oxd-input oxd-input--active' and @type='password' and @name='password' and @placeholder='Password']";
        this.subidSelector = "//button[contains(@class, 'oxd-button--main') and contains(@class, 'orangehrm-login-button')]";
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async login(username, password) {
        await this.page.fill(this.useridSelector, username, { delay: 70 });
        await this.page.fill(this.passidSelector, password, { delay: 70 });
        await this.page.click(this.subidSelector);
    }
}

module.exports = LoginPage;
