import React from "react";
import { Link } from "react-router-dom";
import "../styles/pagesCSS/RegisteredSuccessPage.css";

export default function RegisteredSuccessPage() {
  return (
    <div className="registered-success-wrapper">
      <div className="registered-success-card">
        <h2 className="registered-title">Registration Successful</h2>
        <p className="registered-subtext">
          You have successfully created your account.<br />
          Please check your email to verify it.
        </p>

        <div className="registered-buttons">
          <Link to="/login">
            <button className="registered-btn dark">Go to Login</button>
          </Link>
          <Link to="/products">
            <button className="registered-btn light">Back to Shop</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
