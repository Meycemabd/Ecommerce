import React from 'react';
import '../styles/components.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Return Policy</li>
            <li>Shipping</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Sustainability</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Eyou Store. All rights reserved.
      </div>
    </footer>
  );
}
