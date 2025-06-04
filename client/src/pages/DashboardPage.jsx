import React from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 160px)",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h2>Welcome to your Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
