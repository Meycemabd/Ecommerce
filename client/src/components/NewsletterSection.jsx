import React from 'react';
import '../styles/componentCSS/Newsletter.css'; // Pfad anpassen

export default function NewsletterSection() {
  return (
    <section className="newsletter-section bg-light py-5 text-center">
      <div className="container">
        <h2 className="text-uppercase fw-bold mb-3">Get 10% off your first order</h2>
        <p className="mb-4 text-muted">Subscribe to our newsletter and stay updated on new arrivals and exclusive offers.</p>
        <form className="d-flex justify-content-center flex-wrap gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            className="form-control form-control-lg newsletter-input"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="btn btn-dark btn-lg text-uppercase">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
