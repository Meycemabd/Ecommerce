import React from 'react';
import { FiX, FiCheckCircle, FiXCircle, FiUser, FiMapPin, FiPackage } from 'react-icons/fi';
import '../Styles/OrderDetailModal.css';

export default function OrderDetailModal({ order, onClose, onUpdateStatus }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <header className="modal-header">
          <div className="header-content">
            <h2>Order #{order.id}</h2>
            <span className={`order-status ${order.status}`}>{order.status}</span>
          </div>
          <button className="close-btn" onClick={onClose}>
            <FiX />
          </button>
        </header>

        <div className="modal-body">
          <div className="order-summary">
            <div className="summary-card">
              <div className="card-icon">
                <FiUser />
              </div>
              <div className="card-content">
                <h3>Customer Details</h3>
                <p>{order.customerName}</p>
                <p>{order.customerEmail}</p>
                <p>{order.customerPhone}</p>
              </div>
            </div>

            <div className="summary-card">
              <div className="card-icon">
                <FiMapPin />
              </div>
              <div className="card-content">
                <h3>Shipping Address</h3>
                <p>{order.shippingAddress.street}</p>
                <p>{order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
                <p>{order.shippingAddress.country}</p>
              </div>
            </div>

            <div className="summary-card">
              <div className="card-icon">
                <FiPackage />
              </div>
              <div className="card-content">
                <h3>Order Summary</h3>
                <p><strong>Items:</strong> {order.items.length}</p>
                <p><strong>Order Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
                <p><strong>Total:</strong> €{order.total.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="order-items-section">
            <h3>Order Items</h3>
            <div className="items-container">
              {order.items.map((item, index) => (
                <div key={index} className="item-card">
                  <img src={item.imageFile} alt={item.title} />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p className="item-price">€{item.price.toFixed(2)} x {item.quantity}</p>
                    <p className="item-total">€{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-total-section">
            <div className="total-row">
              <span>Subtotal</span>
              <span>€{order.subtotal.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Shipping</span>
              <span>€{order.shipping.toFixed(2)}</span>
            </div>
            <div className="total-row grand-total">
              <span>Total</span>
              <span>€{order.total.toFixed(2)}</span>
            </div>
          </div>

          {order.status === 'pending' && (
            <div className="modal-actions">
              <button 
                className="action-button complete"
                onClick={() => onUpdateStatus(order.id, 'completed')}
              >
                <FiCheckCircle /> Mark as Completed
              </button>
              <button 
                className="action-button cancel"
                onClick={() => onUpdateStatus(order.id, 'cancelled')}
              >
                <FiXCircle /> Cancel Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}