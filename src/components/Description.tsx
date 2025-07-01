import React from 'react';
import { motion } from "framer-motion";

export default function Description() {
  return (
    <section className="w-full bg-[#1b263b] text-pastelCream py-20 px-6 flex justify-center">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
          Ever feel stuck in the middle of a fight?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Like no matter what you say, your partner, friend, or family member just doesn’t get it?
          Like you’re talking to a wall; frustrated, unheard, and exhausted?
        </p>
        <p className="text-lg leading-relaxed mb-4">
          What if there was a neutral third person, not to take sides, but to observe, guide, and help both of you find clarity?
        </p>
        <p className="text-lg leading-relaxed">
          That’s where Communicat comes in. It acts as your real-time communication coach, always available, always objective. Communicat's goal is simple: help you feel understood, improve how you express yourself, and prevent heated arguments from spiraling. Because better conversations lead to stronger relationships.
        </p>
      </motion.div>
    </section>
  );
}
