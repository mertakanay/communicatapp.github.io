import React from 'react';
import './CoreFeatures.css';

function CoreFeatures() {
  return (
    <section className="core-features">
      <div className="container">
        <h2>What Communicat Can Do for You</h2>
        <ul>
          <li>🧑‍🤝‍🧑 Chat companion for your existing messaging apps: Use Communicat's business number within popular chat apps like WhatsApp and iMessage. No need to switch platforms. Our companion listens in and gives you feedback when there is a negative pattern in the messages you receive and send.</li>
          <li>📝 Standalone message evaluation: Not sure how your words might come across? Use the Communicat app to get instant feedback on any message — whether you're writing one or trying to understand one you received. Learn what's constructive and what might escalate things, so you can avoid spiraling disputes.</li>
          <li>🌍 Built-in translation support: Ask Communicat to translate messages instantly. We help reduce language-based misunderstandings so you can focus on the message, not the words. Translations are context-aware, avoiding the common errors of generic translation tools.</li>
          <li>📊 Relationship insights over time: Track your communication patterns and see how your conversation skills improve over time. Progress is visualized using gamified, Duolingo-style feedback that makes growth feel motivating and measurable.</li>
        </ul>
      </div>
    </section>
  );
}

export default CoreFeatures; 