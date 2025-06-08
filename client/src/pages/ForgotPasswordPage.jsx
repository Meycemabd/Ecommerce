import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import "../styles/pagesCSS/ForgotPasswordPage.css";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResend = () => {
    setResendSuccess(true);
    setTimeout(() => {
      setResendSuccess(false);
    }, 3000);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2>Forgot Your Password?</h2>
        <p className="subtitle">Enter your email and we’ll send you a reset link</p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="forgot-password-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send Reset Email</button>
          </form>
        ) : (
          <div className="success-message">
            {!resendSuccess && (
              <>
                <CheckCircle size={24} color="#28a745" />
                <p>Reset email has been sent to your email address.</p>
                <button onClick={handleResend} className="resend-btn">
                  Resend email
                </button>
              </>
            )}

            {resendSuccess && (
              <p className="resend-success-text">
                ✔ Verification email has been resent.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
