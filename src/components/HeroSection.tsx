import React from 'react';
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0d1b2a] to-[#1b263b] px-6 text-center text-pastelCream"
    >
      <div className="max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          No more toxic relationships.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg sm:text-xl leading-relaxed"
        >
          Communicat acts as your real-time communication referee; watching for negative communication patterns, calming the heat, and guiding you back to understanding. It helps you build healthier conversations and break the cycle of destructive communication.
        </motion.p>
      </div>
    </motion.section>
  );
}