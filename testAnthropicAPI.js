const axios = require('axios');
require('dotenv').config({ path: './env/.env.dev' });

const API_KEY = process.env.ANTHROPIC_API_KEY;

async function testAnthropicAPI() {
  try {
    const response = await axios.post('https://api.anthropic.com/v1/messages', {
      model: 'claude-v1', // Replace with the actual model name if different
      prompt: 'Test prompt',
      max_tokens_to_sample: 100
    }, {
      headers: {
        'x-api-key': API_KEY
      }
    });
    console.log('Anthropic API response:', response.data);
  } catch (error) {
    console.error('Error calling Anthropic API:', error.response ? error.response.data : error.message);
  }
}

testAnthropicAPI();

