import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import "../styles/pagesCSS/LoadingPage.css"; // dieselbe CSS wie LoadingPage

export default function LogoutLoadingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, [dispatch, navigate]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner">
          <Loader2 size={48} className="spinner-icon" />
        </div>
        <h2 className="loading-title">Logging you out</h2>
        <p className="loading-text">Please wait while we log you out...</p>
      </div>
    </div>
  );
}
