import React from 'react';
import { motion } from "framer-motion";

const features = [
  {
    icon: "🧑‍🤝‍🧑",
    title: "Chat companion for your existing messaging apps",
    description:
      "Use Communicat’s business number within popular chat apps like WhatsApp and iMessage. No need to switch platforms. Our companion listens in and gives you feedback when there is a negative pattern in the messages you receive and send."
  },
  {
    icon: "📝",
    title: "Standalone message evaluation",
    description:
      "Not sure how your words might come across? Use the Communicat app to get instant feedback on any message — whether you’re writing one or trying to understand one you received. Learn what’s constructive and what might escalate things, so you can avoid spiraling disputes."
  },
  {
    icon: "🌍",
    title: "Built-in translation support",
    description:
      "Ask Communicat to translate messages instantly. We help reduce language-based misunderstandings so you can focus on the message, not the words. Translations are context-aware, avoiding the common errors of generic translation tools."
  },
  {
    icon: "📊",
    title: "Relationship insights over time",
    description:
      "Track your communication patterns and see how your conversation skills improve over time. Progress is visualized using gamified, Duolingo-style feedback that makes growth feel motivating and measurable."
  }
];

export default function CoreFeatures() {
  return (
    <section className="w-full bg-[#0d1b2a] text-pastelCream py-20 px-6">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
          What Communicat Can Do for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1b263b] p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-base leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
