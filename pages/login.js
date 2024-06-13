const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'test';
dotenv.config({ path: `./env/.env.${env}` });

class LoginPage{
    constructor(page){
        this.page=page
        this.userid= "//input[@id='username']"
        this.passid="//input[@id='password']"
        this.subid="//button[normalize-space()='Login']"
    }

    async login(){
        await this.page.fill(this.userid,process.env.user_name, { delay: 70 })
        await this.page.fill(this.passid,process.env.password, { delay: 70 })
        await this.page.click(this.subid)
    }
}

module.exports=LoginPage