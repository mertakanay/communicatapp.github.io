import React from 'react';
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Forward or send messages for real-time evaluation",
    description:
      "On platforms like WhatsApp and iMessage, simply forward any message, or write your own, to Communicat’s business number. You’ll instantly receive feedback highlighting both positive and negative communication patterns."
  },
  {
    number: 2,
    title: "Add Communicat to your group chats",
    description:
      "Want real-time support during tough conversations? Add Communicat’s number to group chats. When a negative pattern is detected in a message directed at you, Communicat will step in like a neutral referee."
  },
  {
    number: 3,
    title: "Translate messages in context with smart commands",
    description:
      "Need help across languages? Just ask Communicat to translate a message using a simple prompt. It will provide a fast, accurate, and context-aware translation without needing to leave your preferred messaging app."
  }
];

export default function HowToUse() {
  return (
    <section className="w-full bg-[#1b263b] text-pastelCream py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">How To Use Communicat</h2>
        <div className="space-y-10 text-left">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#0d1b2a] p-6 rounded-lg shadow-md"
            >
              <div className="text-pastelBlue text-lg font-bold mb-2">{step.number}. {step.title}</div>
              <p className="text-base leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
