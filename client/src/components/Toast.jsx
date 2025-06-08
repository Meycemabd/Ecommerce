// src/components/Toast.jsx
import React from "react";

const Toast = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "100px",
        right: "20px",
        zIndex: 9999,
        backgroundColor: "#1f1f1f",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        fontSize: "14px",
        fontFamily: "Arial, sans-serif",
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
