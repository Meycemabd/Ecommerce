// src/pages/ThankYouPage.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import "../styles/pagesCSS/ThankYouPage.css";

export default function ThankYouPage() {
  const location = useLocation();
  const { orderData } = location.state || {};

  if (!orderData) {
    return (
      <div className="thank-you-container">
        <div className="thank-you-content">
          <h2>No Order Data Found</h2>
          <p>Please complete your order first.</p>
          <Link to="/cart" className="thank-you-btn">
            Back to Cart
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <div className="thank-you-icon">
          <CheckCircle size={64} />
        </div>
        <h1 className="thank-you-title">Thank You for Your Order!</h1>
        <p className="thank-you-message">
          Your order has been successfully placed. We'll send you an email confirmation shortly.
        </p>

        <div className="order-details">
          <h2>Order Details</h2>
          <div className="order-info">
            <div className="info-group">
              <h3>Customer Information</h3>
              <p>Name: {orderData.customer.firstName} {orderData.customer.lastName}</p>
              <p>Email: {orderData.customer.email}</p>
            </div>

            <div className="info-group">
              <h3>Shipping Address</h3>
              <p>{orderData.shipping.address}</p>
              <p>{orderData.shipping.city}, {orderData.shipping.state} {orderData.shipping.zipCode}</p>
            </div>

            <div className="info-group">
              <h3>Order Summary</h3>
              <div className="order-items">
                {orderData.items.map((item) => (
                  <div key={item.id} className="order-item">
                    <img src={item.image} alt={item.title} />
                    <div className="item-details">
                      <p className="item-title">{item.title}</p>
                      <p className="item-quantity">Quantity: {item.quantity}</p>
                      <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-total">
                <p>Total: ${orderData.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="thank-you-actions">
          <Link to="/" className="thank-you-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
