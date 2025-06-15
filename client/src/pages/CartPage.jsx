import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import { Trash2 } from "lucide-react";
import NewsletterSection from "../components/NewsletterSection";
import "../styles/pagesCSS/CartPage.css";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate("/checkout", { state: { total } });
  };

  return (
    <div className="cart-container">
      <div className="cart-content">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p className="cart-count">{cart.length} items in cart</p>
        </div>

        <div className="cart-main">
          {/* Left Side - Cart Items */}
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <div className="cart-item-quantity">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                  <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button 
                  className="cart-item-remove"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Right Side - Order Summary */}
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
                className="cart-card-checkout-btn"
                onClick={handleCheckout}
                disabled={cart.length === 0}
              >
                Proceed to Checkout
              </button>

            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
      <NewsletterSection />
    </div>
  );
}
