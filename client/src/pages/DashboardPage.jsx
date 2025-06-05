import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      navigate("/login"); // ❗️Falls nicht eingeloggt, zurück zur Login-Seite
      return;
    }

    const timer = setTimeout(() => setLoading(false), 1500); // Ladezeit nur wenn eingeloggt
    return () => clearTimeout(timer);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  if (loading) return <LoadingPage />;

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
      <button className="btn btn-dark mt-3" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
