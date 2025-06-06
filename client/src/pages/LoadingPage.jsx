// src/components/LoadingPage.jsx
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
import "../styles/pagesCSS/LoadingPage.css";

export default function LoadingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderData } = location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/thank-you", { state: { orderData } });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, orderData]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner">
          <Loader2 size={48} className="spinner-icon" />
        </div>
        <h2 className="loading-title">Processing Your Order</h2>
        <p className="loading-text">Please wait while we confirm your purchase</p>
      </div>
    </div>
  );
}
