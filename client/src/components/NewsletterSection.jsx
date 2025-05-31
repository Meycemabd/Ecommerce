import React from 'react';
import '../styles/componentCSS/Newsletter.css';

export default function NewsletterSection() {
  return (
    <section className="newsletter-section py-5 text-center">
      <div className="container">
        <h2 className="newsletter-title mb-3">Get 10% Off Your First Order</h2>
        <p className="newsletter-subtext mb-4">
          Subscribe to our newsletter for updates on new collections and exclusive offers.
        </p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
