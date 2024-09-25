require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const accountSid = process.env.ACCOUNT_SID; // Twilio Account SID
const authToken = process.env.AUTH_TOKEN; // Twilio Auth Token
const client = twilio(accountSid, authToken);

// Route for receiving messages from Twilio
app.post('/whatsapp', (req, res) => {
  const incomingMessage = req.body.Body; // The message text from the user
  const fromNumber = req.body.From; // User's WhatsApp number

  // Handle the incoming message and respond
  const responseMessage = handleUserMessage(incomingMessage);

  client.messages
    .create({
      body: responseMessage,
      from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio WhatsApp number
      to: fromNumber, // User's WhatsApp number
    })
    .then(message => console.log(`Message sent: ${message.sid}`))
    .catch(err => console.error(err));

  res.send('<Response></Response>'); // Respond back to Twilio to stop retries
});

// Function to handle the user message
function handleUserMessage(message) {
  if (message.toLowerCase().includes('price')) {
    return 'Our service prices start from $X.';
  } else if (message.toLowerCase().includes('services')) {
    return 'We offer the following services...';
  } else {
    // ChatGPT API Integration can go here
    return 'I am not sure. Let me connect you with a human representative.';
  }
}

// Example: You can add ChatGPT API integration here to handle more advanced responses
// const chatGPTResponse = await getChatGPTResponse(message); // Use ChatGPT API
// return chatGPTResponse;

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`WhatsApp bot listening on port ${PORT}`);
});
