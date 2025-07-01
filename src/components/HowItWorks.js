import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2>How To Use Communicat</h2>
        <ol>
          <li>Forward or send messages for real-time evaluation: On platforms like WhatsApp and iMessage, simply forward any message, or write your own, to Communicat's business number. You'll instantly receive feedback highlighting both positive and negative communication patterns.</li>
          <li>Add Communicat to your group chats: Want real-time support during tough conversations? Add Communicat's number to group chats. When a negative pattern is detected in a message directed at you, Communicat will step in like a neutral referee.</li>
          <li>Translate messages in context with smart commands: Need help across languages? Just ask Communicat to translate a message using a simple prompt. It will provide a fast, accurate, and context-aware translation without needing to leave your preferred messaging app.</li>
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks; 