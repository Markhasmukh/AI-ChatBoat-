**AI ChatBot**

This is a simple web-based chatbot that lets users interact with an AI-powered model. The chatbot provides responses based on user input, making it a fun and useful tool for answering questions or casual conversations.

**How It Works**

1.The user enters a message in the input field and clicks the send button or presses "Enter."

2.The message appears in the chat window inside a user chat bubble.

3.The chatbot sends the message to an AI model through an API.

4.A loading animation is displayed while waiting for a response.

5.The chatbot returns a response, which appears in an AI chat bubble.

**Features**

*Easy-to-use interface with a clean design

*Instant AI responses through an API

*Loading animation while the chatbot processes the message

*Supports "Enter" key for quick message sending

*Responsive design that works on desktops, tablets, and mobile devices

**Technologies Used**

1.HTML for structuring the chatbot

2.CSS for styling, animations, and layout

3.JavaScript for handling chat logic, user input, and API calls

4.AI API for generating responses

**How to Use**

1.Open index.html in any web browser.

2.Type a message in the input field at the bottom.

3.Click the send button or press "Enter" to submit your message.

4.Wait for the AI to respond – its reply will appear in a separate chat bubble.

**Project Files**

1.index.html – Contains the structure of the chatbot interface

2.style.css – Provides styling and layout for the chatbot

3.script.js – Handles user input, chat logic, and API requests


**Setup & API Key Configuration**

The chatbot uses an AI API to generate responses. Make sure to replace the placeholder API key in script.js:


**javascript**

let Api_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY";
Replace YOUR_API_KEY with your actual API key to enable AI responses.

**Possible Improvements**

Add voice input so users can speak instead of typing

Implement user authentication to save chat history

Use a custom AI model instead of relying on an external API

Improve animations and UI effects for a better experience

**Contributing**

If you'd like to contribute:

Fork this repository.

Create a new branch (git checkout -b feature-branch).

Make your changes and commit them (git commit -m "Your message").

Push the branch (git push origin feature-branch).

Open a pull request.

**License**

This project is open-source and available under the MIT License.
