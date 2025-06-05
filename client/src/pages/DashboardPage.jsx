import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice"; // 👈 Redux-Logout importieren

export default function DashboardPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  const handleLogout = () => {
    setLoading(true);
    dispatch(logout()); // 👈 Redux-Logout auslösen
    setTimeout(() => {
      navigate("/login");
    }, 1500);
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
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading your dashboard...</p>
        </div>
      ) : (
        <>
          <h2>Welcome to your Dashboard</h2>
          <button onClick={handleLogout} className="btn btn-outline-dark mt-3">
            Logout
          </button>
        </>
      )}
    </div>
  );
}
