// src/pages/LogoutLoadingPage.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import "../styles/pagesCSS/LoadingPage.css";

export default function LogoutLoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000); // 3 Sekunden warten, dann zur Startseite

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner">
          <Loader2 size={48} className="spinner-icon" />
        </div>
        <h2 className="loading-title">Logging out...</h2>
        <p className="loading-text">Please wait, redirecting to homepage</p>
      </div>
    </div>
  );
}
