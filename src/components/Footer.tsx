import React from 'react';
export default function Footer() {
    return (
      <footer className="w-full bg-[#1b263b] text-pastelCream py-10 px-6 text-center">
        <div className="flex justify-center gap-8 flex-wrap mb-4">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms-and-conditions" className="hover:underline">Terms and Conditions</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>
        <p className="text-sm opacity-70">© 2025 Communicat. All rights reserved.</p>
      </footer>
    );
  }