# Slack Message Sender

## Description
This project is a simple web application built with Next.js that allows users to send messages directly to a Slack channel. The app provides a user-friendly interface where users can input a message and send it with a single click. It integrates with the Slack API to post messages to a specified channel.

## Features
- **Message Input:** Enter a message to send to Slack.
- **Slack Integration:** Sends the message to a designated Slack channel using the Slack API.
- **Responsive UI:** A clean and responsive interface that works across devices.

## Tech Stack
- **Frontend:** Next.js, React
- **Backend:** Next.js API Routes, Axios
- **Deployment:** Vercel / Ngrok (for local development)
- **APIs:** Slack API

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/slack-message-sender.git
   cd slack-message-sender
   
2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Create a `.env.local` file:**
    ```sh
    touch .env.local
    ```
    **Add the following environment variable in the .env.local file:**
   ```sh
    SLACK_BOT_TOKEN=your-slack-bot-token
    ```
   
5. **Run the development server:**
    ```sh
    npm run dev
    ```
   The server should now be running at `http://localhost:3000`.

## Usage

1. Enter the message you want to send to Slack in the input field.
2. Click on the "Send to Slack" button.
3. A confirmation message will appear below the button once the message is successfully sent.
