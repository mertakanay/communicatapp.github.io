import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Use</a></li>
          <li><a href="/contact">Contact Support</a></li>
          <li><a href="/press">Press Kit</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
        <p>© Communicat 2025 – Say what you feel, without hurting who you love.</p>
      </div>
    </footer>
  );
}

export default Footer; 