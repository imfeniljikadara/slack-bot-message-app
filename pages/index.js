import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const sendMessage = async () => {
    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (data.success) {
        setMessageSent(true); // Set messageSent to true if the message was sent successfully
        setMessage(''); // Optionally clear the input field
      } else {
        setMessageSent(false); // Handle failure, e.g., show an error message
        console.error('Error sending message:', data.error);
      }
    } catch (error) {
      setMessageSent(false);
      console.error('Failed to send message:', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#f0f4f8',
        marginTop: '-15%' ,
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          marginBottom: '2rem',
          color: '#0070f3',
          fontWeight: 'bold'
        }}
      >
        Send a Slack Message
      </h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        style={{
          width: '100%',
          maxWidth: '800px',
          height: '60px',
          padding: '1rem',
          marginBottom: '2rem',
          border: '2px solid #0070f3',
          borderRadius: '10px',
          fontSize: '1.2rem',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      />
      <button
        onClick={sendMessage}
        style={{
          padding: '0.75rem 2rem',
          fontSize: '1.2rem',
          color: '#fff',
          backgroundColor: '#0070f3',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#005bb5')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#0070f3')}
      >
        Send to Slack
      </button>

      {/* Conditionally render the success message below the button */}
      {messageSent && (
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            border: '1px solid #28a745',
            borderRadius: '10px',
            backgroundColor: '#d4edda',
            color: '#155724',
            fontSize: '1.1rem',
            maxWidth: '300px',
            width: '100%',
            textAlign: 'center'
          }}
        >
          Message sent successfully!
        </div>
      )}
    </div>
  );
}
