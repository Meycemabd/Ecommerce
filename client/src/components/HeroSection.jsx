import React from 'react';
import '../styles/components.css'; 

export default function HeroSection() {
  return (
    <section className="hero-video-container">
      <video autoPlay muted loop className="hero-video">
        <source src="/video/promo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-text">
        <h1>Summer Sale</h1>
        <p>Up to 50% off · Limited Time Only</p>
    </div>
    </section>
  );
}
