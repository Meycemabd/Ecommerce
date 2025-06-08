// src/components/Toast.jsx
import React from "react";
import "../styles/componentCSS/Toast.css"

const Toast = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <div className="toast-container show" role="alert" aria-live="assertive" aria-atomic="true">
      {message}
    </div>
  );
};

export default Toast;
