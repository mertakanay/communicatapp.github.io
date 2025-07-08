import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0d1b2a] to-[#1b263b] overflow-hidden"
    >
      {/* Background glow */}
      <h1 className="bg-red-500 text-9xl">Test</h1>
      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        style={{
          background: "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.1), transparent 70%)",
        }}
      />

      {/* Foreground with max width and padding */}
      <motion.div
        className="relative z-10 w-full max-w-4xl px-6 sm:px-12 lg:px-20 xl:px-32 mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.h1
          className="text-pastelCream text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          No more toxic relationships.
        </motion.h1>
        <motion.p
          className="text-pastelCream/90 text-lg sm:text-xl md:text-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Communicat acts as your real-time communication referee; watching for negative communication patterns, calming the heat, and guiding you back to understanding. It helps you build healthier conversations and break the cycle of destructive communication.
        </motion.p>

        {/* Optional CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <button className="bg-pastelCream text-[#0d1b2a] font-semibold px-6 py-3 rounded-xl hover:bg-white transition duration-300 shadow-lg hover:shadow-xl text-lg">
            Join the Waitlist
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}