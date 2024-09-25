# WhatsApp Support Bot

## Description

This project is a customer support bot for WhatsApp, built with Node.js and integrated with the **Twilio WhatsApp API**. The bot is designed to answer frequently asked questions, provide information about services, and escalate complex queries to human representatives when necessary.

## Requirements

Before getting started, make sure you have the following dependencies installed:

- [Node.js](https://nodejs.org/) (v14 or newer)
- [Twilio](https://www.twilio.com/) account with activated **WhatsApp API**
- [ngrok](https://ngrok.com/) (optional, for testing with a public URL)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YourUsername/whatsapp-support-bot.git
   cd whatsapp-support-bot
Install the required dependencies:

npm install

Create a .env file in the root directory of the project and add your Twilio credentials:

ACCOUNT_SID=your_account_sid
AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=whatsapp:+14155238886 # Your Twilio WhatsApp number

How to Run
Ensure your Twilio account is set up for WhatsApp.

Register your phone number in Twilio for WhatsApp.
Set up the Messaging Webhook URL to point to your local server.
Start the bot:

node index.js

If you're using a local server and want to test with WhatsApp, start ngrok to get a public URL:

ngrok http 3000

How It Works
When a user sends a message to the WhatsApp number, the bot will respond based on the content of the message.
Example questions the bot can answer:
"What is the price of the service?"
"What services do you offer?"
If the bot cannot answer the question, it will escalate the message to a human representative.
Example User Interaction
User: What services do you offer?
Bot: We offer the following services...
Escalation to a Human Representative
If the bot doesn't recognize the message or cannot provide a response, the query will be escalated to a human via email or another support system.

Enhancements and Features
AI Integration: You can integrate ChatGPT or another NLP model to provide smarter responses.
Multi-language Support: The bot can be extended to support multiple languages by adding more message handling logic.

License
This project is licensed under the MIT License.


You can customize the URL in the repository clone command (`git clone https://github.com/claniel/whatsapp-support-bot.git`) with your actual GitHub username and repository name.

This `README.md` will provide users with instructions on how to install, run, and use the WhatsApp bot in their environment.

