const axios = require('axios');

// Function to get response from ChatGPT API
async function getChatGPTResponse(userMessage) {
  const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  const apiKey = 'your_openai_api_key'; // Add your OpenAI API key here

  const response = await axios.post(
    apiUrl,
    {
      prompt: userMessage,
      max_tokens: 100,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  return response.data.choices[0].text.trim();
}

module.exports = getChatGPTResponse;
