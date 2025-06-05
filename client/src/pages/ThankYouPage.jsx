// src/pages/ThankYouPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/pagesCSS/ThankYouPage.css";

export default function ThankYouPage() {
  const location = useLocation();
  const user = location.state?.user;
  const total = location.state?.total;

  return (
    <div className="thank-you-page">
      <div className="thank-you-container">
        <h2>Thank you for your order!</h2>
        <p>We’ve sent a confirmation to: <strong>{user?.email}</strong></p>

        <div className="thank-you-details">
          <h4>Shipping Info</h4>
          <p>{user?.name}</p>
          <p>{user?.address}</p>
          <p>{user?.postalCode} {user?.city}, {user?.country}</p>

          <h4 className="mt-4">Order Total</h4>
          <p><strong>€ {total?.toFixed(2)}</strong></p>
        </div>

        <button 
          className="btn btn-dark mt-4"
          onClick={() => {
            window.scrollTo(0, 0);      
            window.location.href = '/';
          }}
        >
          Back to Shop
        </button>
      </div>
    </div>
  );
}
