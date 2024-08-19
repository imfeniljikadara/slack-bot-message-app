import axios from 'axios';

export default async function handler(req, res) {
  const { message } = req.body;

  try {
    const response = await axios.post('https://slack.com/api/chat.postMessage', {
      channel: '# testing', // replace with your Slack channel
      text: message,
    }, {
      headers: {
        Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.data.ok) {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ error: response.data.error });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
}
