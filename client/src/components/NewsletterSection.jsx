import React from 'react';
import '../styles/components.css';

export default function NewsletterSection() {
  return (
    <section className="newsletter">
      <h2>Get 10% off your first order</h2>
      <p>Subscribe to our newsletter and stay updated on new arrivals and exclusive offers.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}
