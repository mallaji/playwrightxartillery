// const {test, expect}= require('@playwright/test');

// //test.use({viewport:{width:500,height:700}})

// test("Valid Login", async function({ page }) {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     console.log(await page.viewportSize().width)
//     console.log(await page.viewportSize().height)
//     await page.getByPlaceholder("Username").type("Admin",{delay:50}) 
//     await page.locator("input[placeholder='Password']").type("admin123",{delay:70}) 
//     await page.locator("button[type='submit']").click()
//     await expect(page).toHaveURL(/dashboard/) 
//     await page.getByAltText("profile picture").first().click()
//     await page.locator("//a[normalize-space()='Logout']").click() 
//     await expect(page).toHaveURL(/login/)
// })

const { test, expect } = require('@playwright/test');
const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../env/.env.dev') });

// Debug logging for environment variables
console.log('Loading environment variables from:', path.resolve(__dirname, '../env/.env.dev'));
console.log('API_KEY:', process.env.ANTHROPIC_API_KEY ? 'Loaded' : 'Not Loaded');
console.log('BASEURL:', process.env.BASEURL ? 'Loaded' : 'Not Loaded');

const API_KEY = process.env.ANTHROPIC_API_KEY;
const BASEURL = process.env.BASEURL;

if (!API_KEY) {
  console.error('Please set your Anthropic API key in the .env file');
  process.exit(1);
}

async function callAnthropicAPI(prompt) {
  try {
    const response = await axios.post('https://api.anthropic.com/v1/messages', {
      model: 'claude-v1', // Replace with the actual model name if different
      prompt: prompt,
      max_tokens_to_sample: 100
    }, {
      headers: {
        'x-api-key': API_KEY
      }
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error calling Anthropic API:', error.response ? error.response.data : error.message);
    return null;
  }
}

test('Valid Login', async ({ page }) => {
  await page.goto(BASEURL);

  const prompt = 'Find the CSS selector for the username input field on the OrangeHRM login page.';
  const anthropicResponse = await callAnthropicAPI(prompt);

  if (anthropicResponse) {
    console.log('Anthropic API response:', anthropicResponse);

    const usernameSelector = anthropicResponse;
    await page.locator(usernameSelector).type('Admin', { delay: 50 });
  } else {
    console.error('Failed to get a response from the Anthropic API.');
    return;
  }

  const passwordSelector = 'input[placeholder="Password"]';
  await page.locator(passwordSelector).type('admin123', { delay: 70 });
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(/dashboard/);
  await page.getByAltText('profile picture').first().click();
  await page.locator("//a[normalize-space()='Logout']").click();
  await expect(page).toHaveURL(/login/);
});



