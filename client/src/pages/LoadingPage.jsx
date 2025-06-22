// src/components/LoadingPage.jsx
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
import "../styles/pagesCSS/LoadingPage.css";

export default function LoadingPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.redirectTo || "/thank-you";
  const orderData = location.state?.orderData;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(redirectTo, { state: { orderData } });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, redirectTo, orderData]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner">
          <Loader2 size={48} className="spinner-icon" />
        </div>
        <h2 className="loading-title">Loading...</h2>
        <p className="loading-text">Please wait a moment</p>
      </div>
    </div>
  );
}
