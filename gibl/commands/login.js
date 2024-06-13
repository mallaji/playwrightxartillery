const ele = require("../elements.json");

const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'test';
dotenv.config({ path: `./env/.env.${env}` });

async function login(page) {
    //console.log(`Logging in with username: ${process.env.user_name}`); 
    //console.log(`Logging in with username: ${process.env.password}`); 
    await page.goto(process.env.baseurl);
    await page.locator(ele.userid).type(process.env.user_name, { delay: 70 });
    await page.locator(ele.passid).type(process.env.password, { delay: 70 });
    await page.locator(ele.subid).click();
}

module.exports = { login };
